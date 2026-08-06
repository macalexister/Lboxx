/**
 * Bosch Professional Tool Finder - Main Application Loader
 * Module Architecture: window.APP namespace, modular design, no globals
 */

window.APP = (() => {
    const init = async () => {
        console.log('[APP] Initializing Bosch Professional Tool Finder...');
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
        console.log(`[APP] ✓ Loaded ${tools.length} tools`);
        await state.cacheTools(tools);
        await search.init(tools);
        console.log('[APP] ✓ Search module ready');
        results.init();
        console.log('[APP] ✓ Results module ready');
        setupEventHandlers();
        console.log('[APP] ✓ Event handlers attached');
        ui.showPlaceholder('Enter a search term to get started');
        console.log('[APP] ✓ Application ready');
    };

    const loadToolsData = async () => {
        try {
            const response = await fetch('data/sample-tools.json');
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
            const data = await response.json();
            return Array.isArray(data) ? data : data.tools || [];
        } catch (e) {
            console.error('[APP] Error loading tools data:', e);
            return [];
        }
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
