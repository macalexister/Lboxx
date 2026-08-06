/**
 * Tool Finder - Main Application Loader
 * Module Architecture: window.APP namespace, modular design, no globals
 */

window.APP = (() => {
    const init = async () => {
        console.log('[APP] Initializing Tool Finder...');
        ui.init();
        console.log('[APP] ✓ UI module ready');
        await state.init();
        console.log('[APP] ✓ State module ready');
        const tools = await loadToolsData();
        if (!tools || tools.length === 0) {
            console.error('[APP] Failed to load tools data');
            ui.showError('Failed to load tools. Please refresh the page.');
            return;
        }
        const lboxxData = await loadLboxxData();
        const enrichedTools = enrichToolsWithLboxx(tools, lboxxData);
        console.log(`[APP] ✓ Loaded ${tools.length} tools`);
        await state.cacheTools(enrichedTools);
        await search.init(enrichedTools);
        console.log('[APP] ✓ Search module ready');
        results.init();
        console.log('[APP] ✓ Results module ready');
        setupEventHandlers();
        console.log('[APP] ✓ Event handlers attached');
        ui.showPlaceholder('Enter a search term to get started');
        console.log('[APP] ✓ Application ready');
    };

    const loadToolsData = async () => {
        const endpoints = ['data/tools.json', 'data/sample-tools.json'];

        for (const endpoint of endpoints) {
            try {
                const response = await fetch(endpoint);
                if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

                const data = await response.json();
                const tools = Array.isArray(data) ? data : data.tools || [];
                if (!Array.isArray(tools) || tools.length === 0) continue;

                return tools.map(normalizeTool);
            } catch (e) {
                console.warn(`[APP] Could not load ${endpoint}:`, e);
            }
        }

        console.error('[APP] Error loading tools data from all configured endpoints');
        return [];
    };

    const loadLboxxData = async () => {
        const endpoints = ['data/lboxx.json', 'data/sample-lboxx.json'];
        for (const endpoint of endpoints) {
            try {
                const response = await fetch(endpoint);
                if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
                const data = await response.json();
                if (data && Array.isArray(data.lboxxVariants)) return data;
            } catch (e) {
                console.warn(`[APP] Could not load ${endpoint}:`, e);
            }
        }
        console.warn('[APP] L-BOXX data unavailable, continuing without recommendations');
        return null;
    };

    const normalizeTool = (tool) => {
        const categories = Array.isArray(tool.categories) ? [...tool.categories] : [];

        if (tool.category && !categories.includes(tool.category)) {
            categories.unshift(tool.category);
        }

        return {
            ...tool,
            sku: tool.sku || tool.modelNumber || tool.productCode || '',
            image: tool.image || tool.imageUrl || tool.thumbnail || '',
            categories,
        };
    };

    const enrichToolsWithLboxx = (tools, lboxxData) => {
        if (!lboxxData || !Array.isArray(lboxxData.lboxxVariants)) {
            return tools.map(tool => ({ ...tool, recommendedLboxx: [], directInlays: [], additionalInlays: [], bestCombo: null }));
        }

        const variants = lboxxData.lboxxVariants;
        const inlays = Array.isArray(lboxxData.inlays) ? lboxxData.inlays : [];
        const inlayById = new Map(inlays.map(inlay => [inlay.id, inlay]));
        const bySize = new Map(variants.map(variant => [variant.size, variant]));

        return tools.map(tool => {
            const fits = Array.isArray(tool.fits) ? tool.fits : [];
            const directInlayMatches = inlays.filter(inlay =>
                Array.isArray(inlay.compatibleTools) && inlay.compatibleTools.includes(tool.id)
            );

            const sizeMatches = fits.map(size => bySize.get(size)).filter(Boolean);
            const inlayLboxxMatches = directInlayMatches
                .flatMap(inlay => (Array.isArray(inlay.forLboxx) ? inlay.forLboxx : []))
                .map(size => bySize.get(size))
                .filter(Boolean);

            const recommendedLboxx = dedupeById([...inlayLboxxMatches, ...sizeMatches]).map(variant => ({
                id: variant.id,
                name: variant.name,
                size: variant.size,
                productCode: variant.productCode || '',
            }));

            const directInlays = dedupeById(directInlayMatches).map(inlay => ({
                id: inlay.id,
                name: inlay.name,
                type: inlay.type || '',
                productCode: inlay.productCode || '',
                forLboxx: Array.isArray(inlay.forLboxx) ? inlay.forLboxx : [],
            }));

            const additionalInlayCandidates = dedupeById(
                recommendedLboxx
                    .map(lboxx => bySize.get(lboxx.size))
                    .filter(Boolean)
                    .flatMap(variant => Array.isArray(variant.compatibleInlays) ? variant.compatibleInlays : [])
                    .map(inlayId => inlayById.get(inlayId))
                    .filter(Boolean)
            );
            const directInlayIds = new Set(directInlays.map(inlay => inlay.id));
            const additionalInlays = additionalInlayCandidates
                .filter(inlay => !directInlayIds.has(inlay.id))
                .map(inlay => ({
                    id: inlay.id,
                    name: inlay.name,
                    type: inlay.type || '',
                    productCode: inlay.productCode || '',
                    forLboxx: Array.isArray(inlay.forLboxx) ? inlay.forLboxx : [],
                }));

            const bestCombo = pickBestCombo(recommendedLboxx, directInlays, additionalInlays, fits);

            return {
                ...tool,
                recommendedLboxx: recommendedLboxx.slice(0, 3),
                directInlays: directInlays.slice(0, 3),
                additionalInlays: additionalInlays.slice(0, 3),
                bestCombo,
            };
        });
    };

    const dedupeById = (items) => {
        const uniqueItems = [];
        const seen = new Set();
        items.forEach(item => {
            if (!item || !item.id || seen.has(item.id)) return;
            seen.add(item.id);
            uniqueItems.push(item);
        });
        return uniqueItems;
    };

    const pickBestCombo = (lboxxList, directInlays, additionalInlays, fits) => {
        if (!Array.isArray(lboxxList) || lboxxList.length === 0) {
            return null;
        }

        const rankedSources = [
            { inlays: Array.isArray(directInlays) ? directInlays : [], source: 'direct', sourceWeight: 10 },
            { inlays: Array.isArray(additionalInlays) ? additionalInlays : [], source: 'additional', sourceWeight: 0 },
        ];

        let best = null;
        let bestScore = -1;
        rankedSources.forEach(({ inlays, source, sourceWeight }) => {
            lboxxList.forEach(lboxx => {
                inlays.forEach(inlay => {
                    const supportsLboxx = Array.isArray(inlay.forLboxx) && inlay.forLboxx.includes(lboxx.size);
                    if (!supportsLboxx) return;

                    const fitIndex = Array.isArray(fits) ? fits.indexOf(lboxx.size) : -1;
                    const fitScore = fitIndex === -1 ? 0 : (3 - Math.min(fitIndex, 2));
                    const score = sourceWeight + fitScore;

                    if (score > bestScore) {
                        bestScore = score;
                        best = { lboxx, inlay, source };
                    }
                });
            });
        });

        return best;
    };

    const setupEventHandlers = () => {
        const searchInput = ui.getElement('searchInput');
        const filterCheckboxes = [ui.getElement('filterCordless'), ui.getElement('filterCompact'), ui.getElement('filterPro')].filter(el => el !== null);
        if (searchInput) {
            let searchTimeout;
            searchInput.addEventListener('input', (e) => {
                clearTimeout(searchTimeout);
                const query = e.target.value.trim();
                if (query.length === 0) {
                    ui.showPlaceholder('Enter a search term to get started');
                    results.clear();
                    return;
                }
                if (query.length < 2) {
                    ui.showPlaceholder(`Type at least 2 characters (${query.length})`);
                    return;
                }
                searchTimeout = setTimeout(() => { performSearch(query); }, 300);
            });
            searchInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    clearTimeout(searchTimeout);
                    performSearch(e.target.value.trim());
                }
            });
        }
        filterCheckboxes.forEach(checkbox => {
            if (checkbox) {
                checkbox.addEventListener('change', () => {
                    const query = ui.getSearchQuery();
                    if (query.length >= 2) performSearch(query);
                });
            }
        });
    };

    const performSearch = (query) => {
        if (!query || query.length < 2) return;
        const filters = ui.getFilters();
        const searchResults = search.query(query, filters);
        state.addSearchHistory(query);
        results.render(searchResults, query);
        setTimeout(() => ui.scrollToTop(), 100);
    };

    return {
        ui, state, search, results,
        init, performSearch, loadToolsData,
        debug: () => ({ app: this, state: state.exportState(), tools: search.getAllTools(), results: results.getResults() }),
        getVersion: () => '1.0.0 (Sprint 1, Phase 3)',
    };
})();

document.addEventListener('DOMContentLoaded', () => {
    window.APP.init().catch(error => {
        console.error('[APP] Initialization failed:', error);
        if (window.APP.ui && window.APP.ui.showError) {
            window.APP.ui.showError('Application failed to initialize. Please refresh the page.');
        }
    });
});
