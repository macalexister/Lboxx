# 📁 BOSCH PRO TOOL - Complete Folder Structure

```
bosch-pro-tool/
│
├── 📄 README.md                    ← Start here! Main documentation
├── 📄 ARCHITECTURE.md              ← Tech Stack decisions
├── 📄 SETUP.md                     ← Development setup guide
├── 📄 DEVELOPMENT.md               ← Coding standards & workflow
├── 📄 CHECKLIST.md                 ← Launch & release checklist
├── 📄 .gitignore                   ← Git exclude rules
├── 📄 .github/workflows/           ← GitHub Actions CI/CD
│
├── 🗂️  docs/
│   ├── PROJECT_BRIEF.md            ← Project overview & goals
│   ├── USER_STORIES.md             ← Feature requirements
│   ├── DATA_FLOW.md                ← How data moves through app
│   ├── API_DESIGN.md               ← JSON data contracts
│   ├── PERFORMANCE.md              ← Optimization guide
│   ├── DEPLOYMENT.md               ← GitHub Pages setup
│   └── TROUBLESHOOTING.md          ← Common issues & fixes
│
├── 🗂️  data/                        ← Data files (version controlled)
│   ├── tools.json                  ← Master Bosch Tools Catalog
│   │   (Schema: ToolsCatalog)
│   ├── lboxx.json                  ← L-Boxx Variants & Inlays
│   │   (Schema: LBoxxCatalog)
│   ├── templates.json              ← Pre-configured Collections
│   ├── metadata.json               ← Last update timestamps
│   └── sample-user-collection.json ← Example user export
│
├── 🗂️  schemas/                     ← JSON Schema definitions
│   ├── tools-schema.json           ← Schema for tools.json
│   ├── lboxx-schema.json           ← Schema for lboxx.json
│   ├── collection-schema.json      ← Schema for user collections
│   └── metadata-schema.json        ← Schema for metadata.json
│
├── 🗂️  src/
│   │
│   ├── index.html                  ← Main HTML entry point
│   ├── collections.html            ← Collections manager page
│   ├── offline.html                ← Offline fallback page
│   │
│   ├── 📂 js/
│   │   ├── app.js                  ← Main application logic
│   │   ├── search.js               ← FuseLJS search engine
│   │   ├── storage.js              ← LocalStorage + IndexedDB
│   │   ├── collections.js          ← User collections management
│   │   ├── export-import.js        ← Export/Import handlers
│   │   ├── offline.js              ← Service Worker & offline logic
│   │   ├── ui-utils.js             ← DOM helpers, templates
│   │   ├── config.js               ← App configuration, constants
│   │   └── vendor/
│   │       └── fuse.min.js         ← FuseLJS library
│   │
│   └── 📂 css/
│       ├── main.css                ← Global styles
│       ├── layout.css              ← Grid & flexbox layouts
│       ├── components.css          ← UI components (cards, buttons)
│       ├── responsive.css          ← Mobile/tablet breakpoints
│       ├── dark-mode.css           ← Dark theme (CSS variables)
│       └── animations.css          ← Transitions & keyframes
│
├── 🗂️  assets/
│   ├── 📂 images/
│   │   ├── logo.svg                ← App logo
│   │   ├── icon-192.png            ← PWA icon (small)
│   │   ├── icon-512.png            ← PWA icon (large)
│   │   ├── bosch-colors/           ← Brand color assets
│   │   └── screenshots/            ← Marketing images
│   │
│   ├── manifest.json               ← PWA manifest
│   └── robots.txt                  ← SEO robots
│
├── 🗂️  .github/
│   └── 📂 workflows/
│       ├── validate.yml            ← JSON validation on PR
│       ├── performance.yml         ← Lighthouse performance check
│       ├── deploy.yml              ← Auto-deploy to GitHub Pages
│       └── lint.yml                ← Code quality checks
│
└── 🗂️  tests/
    ├── test-data/
    │   ├── valid-tools.json        ← Test data (valid)
    │   ├── invalid-tools.json      ← Test data (invalid)
    │   └── large-dataset.json      ← Performance testing
    │
    ├── manual-tests.md             ← Manual test cases
    └── acceptance-criteria.md      ← QA checklist
```

---

## 📊 File Dependency Graph

```
index.html
├── src/js/app.js
│   ├── src/js/config.js
│   ├── src/js/storage.js
│   ├── src/js/search.js (uses FuseLJS)
│   ├── src/js/collections.js
│   ├── src/js/ui-utils.js
│   └── data/tools.json (fetch)
│
└── src/css/main.css
    ├── src/css/layout.css
    ├── src/css/components.css
    ├── src/css/responsive.css
    ├── src/css/dark-mode.css
    └── src/css/animations.css
```

---

## 🔄 Data Flow

```
┌─────────────────────────────┐
│   GitHub Repository         │
│   (data/*.json files)       │
└──────────────┬──────────────┘
               ↓ (fetch via <script>)
┌─────────────────────────────┐
│  Browser LocalStorage       │
│  (tools-cache)              │
└──────────────┬──────────────┘
               ↓ (JSON.parse)
┌─────────────────────────────┐
│  App Memory (searchIndex)   │
│  (FuseLJS indexed data)     │
└──────────────┬──────────────┘
               ↓ (DOM render)
┌─────────────────────────────┐
│  HTML Table/Grid            │
│  (interactive UI)           │
└──────────────┬──────────────┘
               ↓ (user actions)
┌─────────────────────────────┐
│  IndexedDB                  │
│  (user collections)         │
└──────────────┬──────────────┘
               ↓ (export)
┌─────────────────────────────┐
│  JSON/CSV File              │
│  (user download)            │
└─────────────────────────────┘
```

---

## 🌳 Directory Size Estimates

| Directory | Size | Files | Notes |
|-----------|------|-------|-------|
| `src/js/` | ~50KB | 8 | Unminified, no deps |
| `src/css/` | ~20KB | 5 | Uncompressed |
| `data/` | ~500KB | 4 | Depends on catalog size |
| `docs/` | ~100KB | 8 | Markdown documentation |
| `schemas/` | ~30KB | 4 | JSON Schema files |
| **TOTAL** | **~700KB** | **~30** | Ready for GitHub Pages |

---

## 🚀 Quick Navigation

**For Developers:**
1. Start with `README.md`
2. Read `ARCHITECTURE.md` for design decisions
3. Follow `SETUP.md` for local development
4. Check `docs/DATA_FLOW.md` for data flow

**For Product Managers:**
1. Read `docs/PROJECT_BRIEF.md`
2. Review `docs/USER_STORIES.md`
3. Track `CHECKLIST.md`

**For Data/Content:**
1. Edit `data/tools.json` (via PR)
2. Add/update via `data/lboxx.json`
3. Review `schemas/tools-schema.json` for validation

---

## 📝 File Creation Order (MVP)

1. ✅ `README.md` - Project overview
2. ✅ `ARCHITECTURE.md` - Tech decisions
3. `schemas/tools-schema.json` - Data contract
4. `data/tools.json` - Sample tools
5. `src/index.html` - HTML structure
6. `src/css/main.css` - Styling
7. `src/js/app.js` - Logic
8. `SETUP.md` - Dev guide
9. `.github/workflows/validate.yml` - CI/CD

---

**Total Structure: 30 files, ~700KB**  
**Build Time: 0 minutes (no build!)**  
**Deploy Time: < 1 minute (GitHub Pages)**
