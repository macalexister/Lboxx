let allTools = [];

async function initApp() {
  console.log('Initializing Bosch Pro Tool Finder...');
  
  try {
    await loadTools();
    setupSearch();
    setupTheme();
    renderTools(allTools);
    console.log('✓ App initialized successfully');
  } catch (error) {
    console.error('✗ Initialization failed:', error);
    showError('Failed to load application');
  }
}

async function loadTools() {
  try {
    const response = await fetch(CONFIG.ENDPOINTS.TOOLS);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const data = await response.json();
    allTools = data.tools || [];
    console.log(`✓ Loaded ${allTools.length} tools`);
  } catch (error) {
    console.error('Failed to load tools:', error);
    allTools = [];
  }
}

function setupSearch() {
  const searchInput = document.querySelector('#search');
  if (!searchInput) return;
  
  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase().trim();
    const results = query ? 
      allTools.filter(tool => 
        tool.name.toLowerCase().includes(query) ||
        (tool.category && tool.category.toLowerCase().includes(query)) ||
        (tool.description && tool.description.toLowerCase().includes(query))
      ) : allTools;
    renderTools(results);
  });
}

function setupTheme() {
  const theme = Storage.get(CONFIG.STORAGE_KEYS.THEME) || CONFIG.DEFAULTS.THEME;
  document.documentElement.setAttribute('data-theme', theme);
}

function renderTools(tools) {
  const container = document.querySelector('#tools-container');
  if (!container) return;
  
  if (!tools.length) {
    container.innerHTML = '<div class="no-results">No tools found</div>';
    return;
  }
  
  container.innerHTML = tools.map(tool => `
    <article class="tool-card">
      <h3>${escapeHtml(tool.name)}</h3>
      <p class="category">${escapeHtml(tool.category || 'N/A')}</p>
      <p class="description">${escapeHtml(tool.description || '')}</p>
      <div class="specs">
        ${tool.type ? `<span class="spec">Type: ${escapeHtml(tool.type)}</span>` : ''}
      </div>
    </article>
  `).join('');
}

function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

function showError(message) {
  const container = document.querySelector('#tools-container');
  if (container) {
    container.innerHTML = `<div class="error">${escapeHtml(message)}</div>`;
  }
}

document.addEventListener('DOMContentLoaded', initApp);
