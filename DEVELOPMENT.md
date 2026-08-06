# 📋 DEVELOPMENT GUIDE

**Coding standards, Git workflow, and contribution guidelines for Bosch Pro Tool**

---

## 🎯 Project Principles

1. **Zero Build Dependencies** - No npm, Node, or build tools
2. **Keep It Simple** - Vanilla JS > frameworks
3. **Mobile First** - Design for small screens
4. **Offline First** - Works without internet
5. **Accessibility First** - WCAG 2.1 AA minimum
6. **Performance First** - Load < 2 seconds

---

## 🛠️ Tech Stack

| Layer | Technology | File Location |
|-------|-----------|----------------|
| **HTML** | HTML5 Semantic | `src/index.html` |
| **CSS** | CSS3 (no preprocessor) | `src/css/*.css` |
| **JavaScript** | ES6+ Vanilla | `src/js/*.js` |
| **Data** | JSON (versioned) | `data/*.json` |
| **Storage** | LocalStorage + IndexedDB | Browser APIs |

**NO:** React, Vue, Angular, Webpack, npm, Node.js

---

## 📝 Coding Standards

### JavaScript

**Naming:**
```javascript
// ✅ Good
const toolList = [];
const USER_ROLES = ['admin', 'user'];
function initSearch() { }
const getTool = (id) => { };

// ❌ Bad
const TL = [];
const userRoles = ['admin', 'user'];  // Constants uppercase
function init_search() { }  // Snake case
const get_tool = (id) => { };
```

**Variables:**
```javascript
// ✅ Const by default
const tools = [];

// ⚠️ Only if must change
let selectedTool = null;

// ❌ Avoid var
var data = {};
```

**Functions:**
```javascript
// ✅ Arrow functions for callbacks
items.forEach(item => console.log(item));

// ✅ Regular functions for named functions
function initApp() {
  // ...
}

// ✅ Comments for complex logic
// Search debounces to prevent excessive filtering
function performSearch(query) {
  clearTimeout(searchTimeout);
  searchTimeout = setTimeout(() => {
    // ... search logic
  }, 300);
}
```

**Comments:**
```javascript
// ✅ Comment ONLY complex or non-obvious code
// Fuzzy search with 0.6 threshold catches variations
const results = fuse.search(query, { threshold: 0.6 });

// ❌ Don't comment obvious code
const x = 1; // Set x to 1
```

**Error Handling:**
```javascript
// ✅ Good
try {
  const data = JSON.parse(response);
  return data;
} catch (error) {
  console.error('Failed to parse JSON:', error);
  return null;
}

// ❌ Bad
try {
  const data = JSON.parse(response);
} catch (e) { }  // Silent failures are bad
```

### CSS

**Class Naming (BEM-inspired):**
```css
/* ✅ Good: block__element--modifier */
.tool-card { }
.tool-card__header { }
.tool-card__title { }
.tool-card--featured { }

/* ❌ Bad: too specific or unclear */
.card { }  /* What kind of card? */
.tool-card_header { }  /* Inconsistent */
.featured-tool-card-header { }  /* Too long */
```

**CSS Variables for Theming:**
```css
/* ✅ Define once, use everywhere */
:root {
  --color-primary: #0066cc;
  --color-danger: #ff3333;
  --spacing-unit: 8px;
  --font-main: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto;
}

.tool-card {
  background: var(--color-primary);
  padding: var(--spacing-unit);
  font-family: var(--font-main);
}

/* Dark mode override */
@media (prefers-color-scheme: dark) {
  :root {
    --color-primary: #0088ff;
  }
}
```

**Mobile First:**
```css
/* ✅ Mobile by default, then desktop */
.tool-grid {
  display: grid;
  grid-template-columns: 1fr;  /* Mobile: 1 column */
  gap: 16px;
}

@media (min-width: 768px) {
  .tool-grid {
    grid-template-columns: repeat(2, 1fr);  /* Tablet: 2 columns */
  }
}

@media (min-width: 1024px) {
  .tool-grid {
    grid-template-columns: repeat(3, 1fr);  /* Desktop: 3 columns */
  }
}
```

### HTML

**Semantic HTML:**
```html
<!-- ✅ Good: semantic elements -->
<header>
  <nav>Navigation</nav>
</header>

<main>
  <section>
    <article>
      <h1>Title</h1>
      <p>Content</p>
    </article>
  </section>
</main>

<footer>Footer</footer>

<!-- ❌ Bad: div soup -->
<div class="header">
  <div class="nav">Navigation</div>
</div>

<div class="main">
  <div class="section">
    <div class="article">
      <div class="h1">Title</div>
      <div class="p">Content</div>
    </div>
  </div>
</div>
```

**Accessibility:**
```html
<!-- ✅ Good: labels, alt text, ARIA -->
<label for="search">Search tools:</label>
<input id="search" type="text" placeholder="Tool name...">

<img src="tool.jpg" alt="Bosch GWS 18V-125 Angle Grinder">

<button aria-label="Close dialog">×</button>

<!-- ❌ Bad -->
<input type="text" placeholder="Search...">  <!-- No label -->
<img src="tool.jpg">  <!-- No alt text -->
<button>×</button>  <!-- No aria-label -->
```

### JSON Data

**Naming Conventions:**
```json
{
  "id": "bosch-gsr-18v-compact",
  "name": "Bosch GSR 18V-Compact",
  "productCode": "06019C5072",
  "createdAt": "2026-08-01T10:30:00Z",
  "isActive": true,
  "tags": ["compact", "cordless"]
}
```

**Always Include:**
- `id` (unique, kebab-case)
- `name` (human readable)
- Version & timestamp in parent objects
- Description if complex

---

## 🔄 Git Workflow

### Branch Naming

```
feature/add-dark-mode       ← New feature
feature/improve-search       ← Enhancement
bugfix/offline-sync-issue    ← Bug fix
docs/setup-guide             ← Documentation
chore/update-dependencies    ← Maintenance
```

### Commit Messages

**Format:**
```
<type>: <description>

<optional body>
```

**Types:**
- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation
- `style:` Code style (formatting, semicolons)
- `refactor:` Code refactor
- `perf:` Performance improvement
- `chore:` Maintenance, dependencies

**Examples:**
```bash
# ✅ Good
git commit -m "feat: add dark mode toggle"
git commit -m "fix: search not working offline"
git commit -m "docs: update setup guide"
git commit -m "perf: optimize tool catalog loading"

# ❌ Bad
git commit -m "update"  # Unclear
git commit -m "dark mode"  # Missing type
git commit -m "FIXED EVERYTHING"  # Vague
```

### Pull Request Process

1. **Create Branch**
   ```bash
   git checkout -b feature/your-feature
   ```

2. **Make Changes**
   - Small, focused commits
   - Reference issue if applicable (#42)
   - Test locally before pushing

3. **Push to GitHub**
   ```bash
   git push origin feature/your-feature
   ```

4. **Open Pull Request**
   - Descriptive title
   - Reference issues
   - List changes
   - Request reviewers

5. **Code Review**
   - Wait for ≥1 approval
   - Address feedback
   - Resolve merge conflicts

6. **Merge**
   - Squash commits if many small ones
   - Use "Create a merge commit" for features
   - Delete branch after merge

### Merge Requirements

- [ ] ✅ At least 1 approval
- [ ] ✅ All checks passing (GitHub Actions)
- [ ] ✅ No merge conflicts
- [ ] ✅ JSON valid (if data files changed)
- [ ] ✅ Mobile responsive (if UI changed)
- [ ] ✅ No console errors

---

## 🧪 Testing

### Manual Testing Checklist

Before submitting PR:

**Functionality:**
- [ ] Feature works as expected
- [ ] No console errors (F12)
- [ ] No console warnings
- [ ] Related features still work

**Browser:**
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Mobile (iOS & Android)

**Accessibility:**
- [ ] Keyboard navigation works (Tab key)
- [ ] Screen reader friendly (ARIA)
- [ ] Focus indicators visible
- [ ] Color contrast adequate

**Performance:**
- [ ] Lighthouse score ≥ 95 (desktop)
- [ ] Lighthouse score ≥ 90 (mobile)
- [ ] Page loads < 2 seconds
- [ ] No layout shifts

### JSON Schema Validation

```bash
# Validate tools.json locally
python -m json.tool data/tools.json > /dev/null && echo "✓ Valid"

# GitHub Actions runs this automatically on PR
```

---

## 🚀 Performance Optimization

### Critical Rendering Path

1. **Minimize CSS:** Remove unused styles
2. **Critical CSS:** Inline above-the-fold CSS
3. **Optimize Images:** Use WebP, optimize JPG/PNG
4. **Lazy Load:** Load JS after DOM ready
5. **Debounce Events:** Search input (300ms delay)

### Recommended Optimizations

```javascript
// ✅ Debounce search input
function debounce(func, delay) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), delay);
  };
}

const handleSearch = debounce((query) => {
  performSearch(query);
}, 300);

// ✅ Lazy load JSON data
async function loadToolCatalog() {
  const response = await fetch('data/tools.json');
  const data = await response.json();
  return data;
}

// ✅ Cache in LocalStorage
function getCachedTools() {
  const cached = localStorage.getItem('tools-cache');
  return cached ? JSON.parse(cached) : null;
}
```

---

## 🔐 Security Best Practices

### Input Validation
```javascript
// ✅ Validate JSON imports
try {
  const schema = await fetch('schemas/collection-schema.json').then(r => r.json());
  validateJSON(importedData, schema);
} catch (error) {
  showError('Invalid file format');
}
```

### XSS Prevention
```javascript
// ❌ Bad: innerHTML with user data
element.innerHTML = userInput;

// ✅ Good: textContent or escaped
element.textContent = userInput;
// OR
element.innerHTML = escapeHtml(userInput);
```

### Data Privacy
```javascript
// ✅ All data stays client-side
const userCollections = JSON.parse(localStorage.getItem('collections'));

// NO external API calls for user data
// NO analytics tracking PII
// NO cookies (unless explicitly needed)
```

---

## 📦 Adding External Libraries

**Rule:** Only if absolutely necessary.

**Current Dependencies:**
- FuseLJS - Client-side search (11KB)
- That's it!

**Before Adding:**
1. Is it necessary?
2. Can it be done in vanilla JS?
3. What's the file size?
4. Does it have dependencies?
5. Is it actively maintained?

**Adding Library:**
```html
<!-- 1. Download minified library -->
<!-- 2. Place in src/js/vendor/ -->
<!-- 3. Include in index.html -->
<script src="js/vendor/library-name.min.js"></script>

<!-- 4. Add to .gitignore if large -->
src/js/vendor/huge-library/
```

---

## 📚 File Organization

### JavaScript Files

```
src/js/
├── app.js              ← Main entry point, initializes app
├── config.js           ← Constants, configuration
├── storage.js          ← LocalStorage + IndexedDB wrapper
├── search.js           ← FuseLJS integration
├── collections.js      ← Collection management logic
├── export-import.js    ← Export/Import handlers
├── ui-utils.js         ← DOM helpers, template functions
├── offline.js          ← Service Worker & offline logic
└── vendor/
    └── fuse.min.js     ← External libraries only here
```

### CSS Files

```
src/css/
├── main.css            ← Global variables, typography, base
├── layout.css          ← Grid, flexbox, positioning
├── components.css      ← UI components (cards, buttons, etc)
├── responsive.css      ← Media queries, mobile breakpoints
├── dark-mode.css       ← Dark theme overrides
└── animations.css      ← Transitions, keyframe animations
```

---

## 🐛 Debugging Tips

### Browser DevTools

```javascript
// Console logging
console.log('Value:', value);  // Info
console.warn('Warning:', msg);  // Warning
console.error('Error:', error);  // Error
console.table(arrayOfObjects);  // Pretty print array

// Breakpoints
// Press F12 → Sources → Click line number to set breakpoint
// Code stops at breakpoint, inspect variables
```

### Network Tab

1. Open DevTools (F12)
2. Click "Network" tab
3. Reload page
4. Check:
   - HTTP status codes (200, 404, etc)
   - File sizes
   - Load times
   - CORS errors

### Application Tab

1. Open DevTools (F12)
2. Click "Application" tab
3. Check:
   - LocalStorage contents
   - IndexedDB contents
   - Service Worker status
   - Cache storage

---

## 🎓 Learning Resources

- **JavaScript:** https://developer.mozilla.org/en-US/docs/Web/JavaScript
- **CSS:** https://developer.mozilla.org/en-US/docs/Web/CSS
- **HTML:** https://developer.mozilla.org/en-US/docs/Web/HTML
- **Web APIs:** https://developer.mozilla.org/en-US/docs/Web/API
- **Accessibility:** https://www.w3.org/WAI/WCAG21/quickref/

---

## ✅ Pre-Submit Checklist

Before creating PR:

- [ ] Code follows style guide
- [ ] No console errors/warnings
- [ ] Tested on mobile
- [ ] Tested on 2+ browsers
- [ ] Lighthouse score ≥ 95
- [ ] JSON files valid
- [ ] Commit messages follow format
- [ ] No secrets/passwords committed
- [ ] Documentation updated (if needed)

---

## 🤝 Getting Help

- **Issues:** GitHub Issues
- **Discussions:** GitHub Discussions
- **Email:** dev@bosch-pro-tool.dev
- **Slack:** #dev-team (if applicable)

---

**Last Updated:** 2026-08-06  
**Maintainer:** Tech Lead  
**Next Review:** After MVP launch
