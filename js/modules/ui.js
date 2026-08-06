/**
 * @module ui - DOM manipulation and rendering helpers
 */
const ui = (() => {
    const elements = {};
    const init = () => {
        elements.app = document.getElementById('app');
        elements.mainContent = document.getElementById('main-content');
        elements.searchInput = document.getElementById('search-input');
        elements.resultsContainer = document.getElementById('results-container');
        elements.filterCordless = document.getElementById('filter-cordless');
        elements.filterCompact = document.getElementById('filter-compact');
        elements.filterPro = document.getElementById('filter-pro');
    };
    const getElement = (name) => elements[name] || null;
    const clearResults = () => { if (elements.resultsContainer) elements.resultsContainer.innerHTML = ''; };
    const showPlaceholder = (message = 'Enter a search term to get started') => {
        clearResults();
        const placeholder = document.createElement('div');
        placeholder.className = 'placeholder';
        placeholder.setAttribute('aria-live', 'polite');
        placeholder.innerHTML = `<p>${escapeHtml(message)}</p>`;
        elements.resultsContainer?.appendChild(placeholder);
    };
    const showLoading = () => showPlaceholder('Loading tools...');
    const showError = (message = 'An error occurred') => showPlaceholder(`❌ ${message}`);
    const showNoResults = (query = '') => {
        const msg = query ? `No tools found for "${escapeHtml(query)}"` : 'No tools found';
        showPlaceholder(msg);
    };
    const createToolCard = (tool) => {
        const card = document.createElement('div');
        card.className = 'tool-card';
        card.setAttribute('role', 'article');
        card.setAttribute('data-tool-id', tool.id);
        const badges = (tool.categories || []).slice(0, 3).map(cat => `<span class="tool-card-badge">${escapeHtml(cat)}</span>`).join('');
        card.innerHTML = `
            <div class="tool-card-image" aria-hidden="true">📦</div>
            <div class="tool-card-header">
                <h3 class="tool-card-title">${escapeHtml(tool.name)}</h3>
                <p class="tool-card-sku">${escapeHtml(tool.sku || 'N/A')}</p>
            </div>
            ${tool.description ? `<p class="tool-card-description">${escapeHtml(tool.description)}</p>` : ''}
            ${badges ? `<div class="tool-card-meta">${badges}</div>` : ''}
        `;
        return card;
    };
    const renderResults = (tools, message = '') => {
        if (!Array.isArray(tools) || tools.length === 0) {
            showNoResults();
            return;
        }
        clearResults();
        if (message) {
            const msgEl = document.createElement('p');
            msgEl.className = 'results-meta';
            msgEl.textContent = message;
            elements.resultsContainer?.appendChild(msgEl);
        }
        const fragment = document.createDocumentFragment();
        tools.forEach(tool => { fragment.appendChild(createToolCard(tool)); });
        elements.resultsContainer?.appendChild(fragment);
    };
    const escapeHtml = (text) => {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    };
    const scrollToTop = () => { window.scrollTo({ top: 0, behavior: 'smooth' }); };
    const getSearchQuery = () => (elements.searchInput?.value || '').trim();
    const setSearchQuery = (query) => { if (elements.searchInput) elements.searchInput.value = query; };
    const getFilters = () => ({
        cordless: elements.filterCordless?.checked || false,
        compact: elements.filterCompact?.checked || false,
        pro: elements.filterPro?.checked || false,
    });
    return {
        init, clearResults, showPlaceholder, showLoading, showError, showNoResults,
        createToolCard, renderResults, scrollToTop, getSearchQuery, setSearchQuery,
        getFilters, getElement,
    };
})();
