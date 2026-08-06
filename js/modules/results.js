/**
 * @module results - Search results display and management
 */
const results = (() => {
    let currentResults = [];
    let selectedToolId = null;
    const init = () => {
        currentResults = [];
        selectedToolId = null;
    };
    const render = (tools, query = '') => {
        if (!Array.isArray(tools)) tools = [];
        currentResults = tools;
        if (tools.length === 0) {
            ui.showNoResults(query);
            return;
        }
        let message = '';
        if (query) {
            message = `Found ${tools.length} tool${tools.length !== 1 ? 's' : ''} for "${query}"`;
        } else {
            message = `Showing ${tools.length} tool${tools.length !== 1 ? 's' : ''}`;
        }
        ui.renderResults(tools, message);
    };
    const selectTool = (toolId) => {
        const tool = currentResults.find(t => t.id === toolId);
        if (!tool) return null;
        selectedToolId = toolId;
        return tool;
    };
    const getSelectedTool = () => {
        if (!selectedToolId) return null;
        return currentResults.find(t => t.id === selectedToolId) || null;
    };
    const getResults = () => [...currentResults];
    const getCount = () => currentResults.length;
    const clear = () => {
        currentResults = [];
        selectedToolId = null;
        ui.showPlaceholder();
    };
    return {
        init, render, selectTool, getSelectedTool, getResults, getCount, clear,
    };
})();
