# BOSCH PRO TOOL - Tech Stack Architecture & Decision Log

**Projekt:** Bosch Pro Tool - Professional Inventory & Organization System  
**Status:** Design Sprint - Architecture Phase  
**Last Updated:** 2026-08-06

---

## 📐 Tech Stack Overview

```
┌─────────────────────────────────────────────────────────┐
│                   GITHUB PAGES HOSTING                  │
│                  (Zero Build Pipeline)                   │
└─────────────────────────────────────────────────────────┘
         ↓                    ↓                    ↓
   ┌─────────────┐   ┌──────────────┐   ┌────────────────┐
   │  FRONTEND   │   │ DATA STORAGE │   │ SEARCH/FILTER  │
   ├─────────────┤   ├──────────────┤   ├────────────────┤
   │ HTML5       │   │ JSON Files   │   │ Client-Side JS │
   │ CSS3        │   │ (in Repo)    │   │ FuseLJS        │
   │ Vanilla JS  │   │ Versioned    │   │ Real-time      │
   │ No Build    │   │ Git Control  │   │ Filter Engine  │
   └─────────────┘   └──────────────┘   └────────────────┘
         ↓                    ↓                    ↓
   ┌─────────────────────────────────────────────────────┐
   │         LOCAL STORAGE (IndexedDB + LocalStorage)    │
   │  • User Collections • Favorites • Configurations    │
   └─────────────────────────────────────────────────────┘
         ↓                    ↓                    ↓
   ┌──────────────┐   ┌────────────────┐   ┌─────────────┐
   │   EXPORT     │   │    IMPORT      │   │   OFFLINE   │
   │ JSON/CSV     │   │ JSON/CSV       │   │  Fully      │
   │ Service      │   │ Validation     │   │ Functional  │
   └──────────────┘   └────────────────┘   └─────────────┘
```

---

## 🎯 CORE DESIGN DECISIONS

### 1. **Frontend: Vanilla HTML5/CSS3/JS (NO Build Tools)**

**Decision:** Zero-dependency approach  
**Why:**
- ✅ Instant GitHub Pages deployment
- ✅ Zero build complexity
- ✅ Maintainable by non-developers
- ✅ Optimal performance (<2s load)
- ✅ Full offline capability

**What We Use:**
- HTML5 Semantic markup
- CSS3 Grid + Flexbox (no framework)
- Modern ES6+ JavaScript (no transpiler needed)
- Fetch API for JSON loading
- Service Worker for offline support

**NOT Included:**
- ❌ React/Vue/Angular
- ❌ Webpack/Vite/Parcel
- ❌ Node.js build pipeline
- ❌ npm dependencies (only dev tools in .gitignore)

---

### 2. **Data Storage: JSON Files in Repository**

**Decision:** Version-controlled JSON as database  
**Why:**
- ✅ Perfect for static sites
- ✅ GitHub is the "database"
- ✅ Full version history (Git commits)
- ✅ Easy collaboration (PR reviews)
- ✅ Zero server/database costs
- ✅ Human-readable data

**Structure:**
```
data/
├── tools.json          # Master Bosch Tools Catalog
├── lboxx.json          # L-Boxx Variants & Inlays
├── templates.json      # Pre-configured Collections
└── metadata.json       # Last Update Info
```

**Constraints:**
- JSON file size < 10MB (soft limit for GitHub Pages)
- 50+ tools per JSON for decent catalog
- Each tool must have unique ID
- Pagination handled client-side

---

### 3. **Search: Client-Side JavaScript Engine**

**Decision:** Full-text search in browser  
**Why:**
- ✅ Works offline
- ✅ Zero server cost
- ✅ Instant search results
- ✅ Privacy (no data sent to server)

**Implementation:**
- FuseLJS library (lightweight, ~11KB)
- Indexed search on tool names, categories, descriptions
- Real-time filter with debouncing
- Keyboard shortcuts (Cmd+F focus)

---

### 4. **Local Storage: IndexedDB + LocalStorage**

**Decision:** Hybrid approach for user data  
**Why:**
- ✅ LocalStorage: Simple key-value (configs, favorites)
- ✅ IndexedDB: Complex data (collections with many items)
- ✅ Syncs with cloud on next online access
- ✅ Respects user privacy

**What's Stored:**
```
LocalStorage:
  bosch-pro-theme: "dark|light"
  bosch-pro-lang: "de|en"
  bosch-pro-favorites: [id1, id2, ...]

IndexedDB (bosch-pro-db):
  - collections: user-created tool collections
  - custom-items: user-added items
  - sync-queue: pending uploads
```

---

### 5. **Deployment: GitHub Pages (Automatic)**

**Decision:** GitHub Pages with custom domain option  
**Why:**
- ✅ Automatic on push to main
- ✅ HTTPS included
- ✅ Zero hosting cost
- ✅ CDN included
- ✅ Version rollback via Git

**Workflow:**
```
Feature Branch
    ↓
Pull Request (Review)
    ↓
Merge to Main
    ↓
GitHub Pages Auto-Deploy
    ↓
Live at https://bosch-pro-tool.github.io
```

---

### 6. **Git Workflow: Feature Branches + PR**

**Decision:** GitFlow-inspired simplified workflow  

**Branch Strategy:**
```
main              ← Production (always deployable)
├── feature/add-tools-catalog
├── feature/improve-search
├── feature/export-import
├── bugfix/offline-sync
└── docs/setup-guide
```

**PR Requirements:**
- At least 1 code review
- Passes JSON validation
- Performance check (<2s load)
- Mobile responsive test

---

## 📊 ARCHITECTURE COMPARISON

| Aspect | Our Choice | Why NOT React | Why NOT Static Gen |
|--------|-----------|------|---------|
| Build Process | None | Adds 30+ dependencies | Requires build step |
| Learning Curve | Low | Steep | Medium |
| Offline Support | Native | Possible | Harder |
| Data Updates | Git commits | API required | Rebuild needed |
| Scalability | JSONs < 10MB | Unlimited | Unlimited |
| Cost | $0 | $0-50/month | $0-10/month |
| Maintenance | Simple | Complex | Medium |

---

## 🚀 PERFORMANCE TARGETS

| Metric | Target | Approach |
|--------|--------|----------|
| Page Load | < 2s | Minified HTML, gzipped JSON, lazy images |
| Search Response | < 100ms | FuseLJS indexing, debouncing |
| Offline Ready | Immediate | Service Worker caching |
| LCP (Largest Contentful Paint) | < 1.5s | Optimized images, critical CSS |
| FID (First Input Delay) | < 100ms | Minimal JS, event debouncing |
| CLS (Cumulative Layout Shift) | < 0.1 | Fixed layouts, no dynamic content shift |

---

## 🔄 DATA SYNC STRATEGY

### Online → Download latest JSON
```javascript
fetch('data/tools.json')
  .then(r => r.json())
  .then(data => {
    localStorage.setItem('tools-cache', JSON.stringify(data));
    localStorage.setItem('tools-cache-timestamp', Date.now());
  });
```

### Offline → Use cached data
```javascript
const cached = localStorage.getItem('tools-cache');
if (cached) useData(JSON.parse(cached));
```

### Local Changes → IndexedDB queue
```javascript
if (navigator.onLine) {
  syncLocalChangesToGitHub();
} else {
  queueForSync();
}
```

---

## 🔐 Security Considerations

| Aspect | Approach |
|--------|----------|
| **XSS Protection** | Sanitize JSON input, escape user content |
| **Data Privacy** | All data stays client-side (unless user exports) |
| **API Keys** | None needed (static content only) |
| **Authentication** | GitHub OAuth optional (for future sync) |
| **CORS** | Not applicable (same-origin GitHub Pages) |

---

## 📈 SCALABILITY LIMITS & WORKAROUNDS

**Soft Limits:**
- JSON files: Keep < 10MB (GitHub Pages CDN optimal)
- Tools catalog: 5000+ items possible
- User collections: Unlimited (stored locally)
- Concurrent searches: All handled client-side

**If We Exceed:**
- Split tools.json → tools-part1.json, tools-part2.json
- Lazy load less-used categories
- Implement pagination with virtual scrolling

---

## 🛠️ TECHNOLOGY STACK DETAIL

| Layer | Technology | Reason |
|-------|-----------|--------|
| **Hosting** | GitHub Pages | Free, automatic, HTTPS |
| **Frontend Framework** | None (Vanilla JS) | Zero dependencies |
| **CSS** | Native (Grid/Flexbox) | Modern browser support |
| **Search** | FuseLJS | Small, no deps, offline |
| **Storage** | LocalStorage + IndexedDB | Browser standard APIs |
| **Sync** | Manual (user trigger) | Simplicity |
| **Build** | None | Push to GitHub = Deploy |
| **Testing** | Manual + GitHub Actions (lint) | Simplicity |

---

## 📋 PHASE TIMELINE

| Phase | Duration | Deliverables |
|-------|----------|--------------|
| **Design** | Week 1 | Architecture, schemas, wireframes |
| **MVP** | Week 2-3 | Core UI, 50+ tools, search |
| **Features** | Week 4-5 | Export/Import, collections |
| **Polish** | Week 6 | Performance, offline, mobile |
| **Launch** | Week 7 | Documentation, GitHub Pages |

---

## ✅ SUCCESS CRITERIA

- [ ] Zero build dependencies
- [ ] Page load < 2 seconds
- [ ] Works fully offline
- [ ] Search within 100ms
- [ ] Mobile responsive (100% viewport width)
- [ ] 50+ Bosch tools in catalog
- [ ] Export to JSON + CSV
- [ ] Import with validation
- [ ] Dark/light mode toggle
- [ ] German + English support

---

## 📞 DECISION OWNERS

| Decision | Owner | Reviewed |
|----------|-------|----------|
| No Build Tools | Tech Lead | ✓ Approved |
| JSON Data Storage | Product Lead | ✓ Approved |
| Client-Side Search | Engineering | ✓ Approved |
| GitHub Pages Hosting | DevOps | ✓ Approved |

---

## 🔮 FUTURE EXTENSIBILITY

**Without Major Refactoring:**
- ✅ Add multi-language support (JSON i18n)
- ✅ Dark/Light theme toggle (CSS vars)
- ✅ Custom collections (IndexedDB)
- ✅ Export/Import formats (CSV, PDF via client libs)

**Future Enhancements (Optional):**
- Optional: Sync to GitHub Gist (user data backup)
- Optional: PWA installation (add to home screen)
- Optional: Mobile app wrapper (React Native)
- Optional: Collaborative mode (via GitHub API)

---

## 📚 References

- MDN Web Docs: Service Workers
- GitHub Pages: Static Site Hosting
- FuseLJS: Client-side fuzzy search
- JSON Schema: Data validation
- Accessibility: WCAG 2.1 AA

---

**Document Version:** 1.0  
**Last Review:** 2026-08-06  
**Next Review:** After MVP Launch
