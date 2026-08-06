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
        const imageSrc = tool.image || buildToolPlaceholder(tool.name);
        const favorite = typeof state !== 'undefined' && state.isFavorite ? state.isFavorite(tool.id) : false;
        const lboxx = Array.isArray(tool.recommendedLboxx) ? tool.recommendedLboxx : [];
        const lboxxMarkup = lboxx.length > 0
            ? `<div class="tool-card-lboxx"><strong>Passende L-BOXX:</strong> ${lboxx.map(item => `${escapeHtml(item.name)} (${escapeHtml(item.size)})`).join(' • ')}</div>`
            : '<div class="tool-card-lboxx tool-card-lboxx--empty">Keine L-BOXX-Empfehlung hinterlegt</div>';
        card.innerHTML = `
            <div class="tool-card-image">
                <img class="tool-card-img" src="${escapeHtml(imageSrc)}" alt="${escapeHtml(tool.name)}" loading="lazy">
            </div>
            <div class="tool-card-header">
                <h3 class="tool-card-title">${escapeHtml(tool.name)}</h3>
                <p class="tool-card-sku">${escapeHtml(tool.sku || 'N/A')}</p>
            </div>
            ${tool.description ? `<p class="tool-card-description">${escapeHtml(tool.description)}</p>` : ''}
            ${badges ? `<div class="tool-card-meta">${badges}</div>` : ''}
            ${lboxxMarkup}
            <button type="button" class="tool-card-save" data-tool-id="${escapeHtml(tool.id)}" aria-pressed="${favorite ? 'true' : 'false'}">
                ${favorite ? 'Gespeichert' : 'Speichern'}
            </button>
        `;

        const imageEl = card.querySelector('.tool-card-img');
        if (imageEl) {
            imageEl.addEventListener('error', () => {
                imageEl.src = buildToolPlaceholder(tool.name);
            });
        }

        const saveButton = card.querySelector('.tool-card-save');
        if (saveButton) {
            saveButton.addEventListener('click', (event) => {
                event.preventDefault();
                event.stopPropagation();
                toggleFavorite(tool.id, saveButton);
            });
        }
        return card;
    };
    const toggleFavorite = (toolId, buttonEl) => {
        if (typeof state === 'undefined' || !state.isFavorite || !state.addFavorite || !state.removeFavorite) return;
        const isFavorite = state.isFavorite(toolId);
        if (isFavorite) {
            state.removeFavorite(toolId);
            buttonEl.textContent = 'Speichern';
            buttonEl.setAttribute('aria-pressed', 'false');
            return;
        }
        state.addFavorite(toolId);
        buttonEl.textContent = 'Gespeichert';
        buttonEl.setAttribute('aria-pressed', 'true');
    };
    const buildToolPlaceholder = (name = 'Tool') => {
        const initials = name
            .split(' ')
            .filter(Boolean)
            .slice(0, 2)
            .map(part => part[0].toUpperCase())
            .join('');
        const label = initials || 'TL';
        const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="640" height="360"><defs><linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#007BC0"/><stop offset="100%" stop-color="#003A70"/></linearGradient></defs><rect width="100%" height="100%" fill="url(#bg)"/><text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle" font-family="Arial, sans-serif" font-size="96" fill="#ffffff">${label}</text></svg>`;
        return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
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
