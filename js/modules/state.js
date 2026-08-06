/**
 * @module state - Client-side state management
 */
const state = (() => {
    const STORAGE_KEY = 'tool-finder-state';
    let localState = {
        searchHistory: [],
        favorites: [],
        filters: { cordless: false, compact: false, pro: false },
        lastSearchQuery: '',
        preferences: { theme: 'light', layout: 'grid' },
        cachedTools: null,
    };
    const init = async () => {
        loadFromLocalStorage();
        console.log('[State] Initialized');
    };
    const loadFromLocalStorage = () => {
        try {
            const stored = localStorage.getItem(STORAGE_KEY);
            if (stored) {
                const parsed = JSON.parse(stored);
                localState = { ...localState, ...parsed };
            }
        } catch (e) {
            console.error('[State] Error loading:', e);
        }
    };
    const saveToLocalStorage = () => {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(localState));
        } catch (e) {
            console.error('[State] Error saving:', e);
        }
    };
    const cacheTools = async (tools) => {
        if (!Array.isArray(tools)) return;
        localState.cachedTools = tools;
        saveToLocalStorage();
    };
    const getCachedTools = async () => localState.cachedTools || [];
    const addSearchHistory = (query) => {
        if (!query || query.trim() === '') return;
        const trimmed = query.trim();
        localState.searchHistory = localState.searchHistory.filter(q => q !== trimmed);
        localState.searchHistory.unshift(trimmed);
        localState.searchHistory = localState.searchHistory.slice(0, 20);
        localState.lastSearchQuery = trimmed;
        saveToLocalStorage();
    };
    const getSearchHistory = () => [...localState.searchHistory];
    const clearSearchHistory = () => { localState.searchHistory = []; saveToLocalStorage(); };
    const addFavorite = (toolId) => {
        if (!localState.favorites.includes(toolId)) {
            localState.favorites.push(toolId);
            saveToLocalStorage();
        }
    };
    const removeFavorite = (toolId) => {
        localState.favorites = localState.favorites.filter(id => id !== toolId);
        saveToLocalStorage();
    };
    const isFavorite = (toolId) => localState.favorites.includes(toolId);
    const getFavorites = () => [...localState.favorites];
    const saveFilters = (filters) => {
        localState.filters = { ...localState.filters, ...filters };
        saveToLocalStorage();
    };
    const getFilters = () => ({ ...localState.filters });
    const clearFilters = () => { localState.filters = { cordless: false, compact: false, pro: false }; saveToLocalStorage(); };
    const exportState = () => ({ ...localState });
    return {
        init, cacheTools, getCachedTools, addSearchHistory, getSearchHistory, clearSearchHistory,
        addFavorite, removeFavorite, isFavorite, getFavorites, saveFilters, getFilters, clearFilters,
        exportState,
    };
})();
