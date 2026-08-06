/**
 * @module search - FuseLJS fuzzy search integration
 */
const search = (() => {
    let fuseIndex = null;
    let allTools = [];
    const searchOptions = {
        keys: ['name', 'sku', 'categories', 'description'],
        threshold: 0.3,
        ignoreLocation: true,
        minMatchCharLength: 2,
        useExtendedSearch: true,
        includeScore: true,
    };
    const init = async (tools) => {
        if (!Array.isArray(tools) || tools.length === 0) return;
        allTools = tools;
        if (typeof Fuse === 'undefined') {
            console.error('[Search] FuseLJS library not loaded');
            return;
        }
        try {
            fuseIndex = new Fuse(allTools, searchOptions);
            console.log(`[Search] Indexed ${allTools.length} tools`);
        } catch (e) {
            console.error('[Search] Error:', e);
        }
    };
    const query = (queryText, filters = {}) => {
        if (!fuseIndex) return [];
        const trimmedQuery = (queryText || '').trim();
        if (trimmedQuery.length === 0) return [];
        try {
            let results = fuseIndex.search(trimmedQuery);
            results = results.map(result => ({ ...result.item, relevanceScore: result.score }));
            if (Object.values(filters).some(v => v === true)) {
                results = applyFilters(results, filters);
            }
            return results;
        } catch (e) {
            console.error('[Search] Query failed:', e);
            return [];
        }
    };
    const applyFilters = (results, filters) => {
        return results.filter(tool => {
            if (filters.cordless && !isCordless(tool)) return false;
            if (filters.compact && !isCompact(tool)) return false;
            if (filters.pro && !isPro(tool)) return false;
            return true;
        });
    };
    const isCordless = (tool) => {
        const text = `${tool.type || ''} ${(tool.categories || []).join(' ')} ${(tool.tags || []).join(' ')}`.toLowerCase();
        return text.includes('cordless');
    };
    const isCompact = (tool) => {
        const text = `${tool.name || ''} ${tool.description || ''} ${(tool.categories || []).join(' ')} ${(tool.tags || []).join(' ')}`.toLowerCase();
        return text.includes('compact');
    };
    const isPro = (tool) => {
        const text = `${tool.name || ''} ${(tool.categories || []).join(' ')} ${(tool.tags || []).join(' ')}`.toLowerCase();
        return text.includes('professional') || text.includes('pro');
    };
    const getAllTools = () => [...allTools];
    return { init, query, getAllTools };
})();
