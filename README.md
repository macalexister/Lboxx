# 🔧 BOSCH PRO TOOL

**Professional Inventory & Organization System for Bosch Tools & L-Boxx Storage**

![Status](https://img.shields.io/badge/status-MVP-blue) ![Version](https://img.shields.io/badge/version-1.0.0-green) ![License](https://img.shields.io/badge/license-MIT-blue) ![Build](https://img.shields.io/badge/build-zero%20dependencies-brightgreen)

---

## 🎯 What is Bosch Pro Tool?

A lightweight, offline-capable web application for Bosch professionals to:
- 📦 Organize tools across L-Boxx storage systems
- 🔍 Instantly search tool catalogs
- 💾 Create & manage custom tool collections
- 📊 Export/Import collections as JSON or CSV
- 📱 Access from any device (mobile, tablet, desktop)
- 🚫 Work completely offline

**Zero build tools. Zero dependencies. Just HTML, CSS, and JavaScript.**

---

## ✨ Key Features

### 🛠️ Master Tool Catalog
- 50+ Bosch professional tools
- Searchable by name, category, specifications
- Offline-first design
- Real-time search (<100ms)

### 📦 L-Boxx Organization
- All L-Boxx sizes (Mini → XL)
- Inlay configurations & compatibility
- Pre-configured starter kits
- Custom organization planning

### 👤 Personal Collections
- Create unlimited custom collections
- Organize tools by job/project
- Track tool condition & location
- Add personal notes & favorites

### 💾 Import/Export
- **JSON Export** - Full data portability
- **CSV Export** - Spreadsheet compatibility
- **JSON Import** - Restore collections
- **Validation** - Prevent corrupt data

### 🌙 Smart UI
- Dark/Light mode toggle
- Responsive design (mobile-first)
- Keyboard shortcuts for power users
- Accessibility (WCAG 2.1 AA)

### 📱 Offline First
- Works without internet
- Service Worker caching
- IndexedDB for complex data
- Sync on reconnect

---

## 🚀 Quick Start

### For Users
1. **Visit:** https://bosch-pro-tool.github.io
2. **Browse** the tool catalog
3. **Create** your first collection
4. **Export** as JSON or CSV

### For Developers

#### Prerequisites
- Git
- Modern web browser (Chrome 90+, Firefox 88+, Safari 14+)
- Text editor (VS Code recommended)
- **No npm, Node, or build tools needed!**

#### Setup (3 steps)
```bash
# 1. Clone repository
git clone https://github.com/bosch-pro-tool/app.git
cd bosch-pro-tool

# 2. Start local server (any method)
python -m http.server 8000
# OR: npx http-server
# OR: Use VS Code Live Server extension

# 3. Open browser
open http://localhost:8000
```

**Done!** No build step. No `npm install`. Just edit and reload.

---

## 📁 Project Structure

```
bosch-pro-tool/
├── README.md                  ← You are here
├── ARCHITECTURE.md            ← Tech stack decisions
├── SETUP.md                   ← Detailed dev setup
├── CHECKLIST.md               ← Launch checklist
│
├── docs/                      ← Documentation
│   ├── USER_STORIES.md        ← Feature requirements
│   ├── DATA_FLOW.md           ← How data flows
│   └── DEPLOYMENT.md          ← GitHub Pages setup
│
├── data/                      ← JSON data (version controlled)
│   ├── tools.json             ← Tool catalog
│   ├── lboxx.json             ← L-Boxx catalog
│   └── metadata.json          ← Timestamps
│
├── schemas/                   ← JSON Schema validation
│   ├── tools-schema.json
│   ├── lboxx-schema.json
│   └── collection-schema.json
│
├── src/
│   ├── index.html             ← Main app
│   ├── js/                    ← JavaScript (ES6+)
│   │   ├── app.js             ← Main logic
│   │   ├── storage.js         ← LocalStorage + IndexedDB
│   │   ├── search.js          ← FuseLJS search
│   │   └── export-import.js   ← CSV/JSON handlers
│   └── css/                   ← Vanilla CSS
│       ├── main.css           ← Global styles
│       ├── responsive.css     ← Mobile layouts
│       └── dark-mode.css      ← Dark theme
│
├── .github/workflows/         ← GitHub Actions
│   ├── validate.yml           ← JSON schema validation
│   └── deploy.yml             ← Auto-deploy to Pages
│
└── tests/                     ← Test data & specs
```

**See [`FOLDER_STRUCTURE.md`](FOLDER_STRUCTURE.md) for detailed explanation.**

---

## 📊 Tech Stack

| Layer | Technology | Why |
|-------|-----------|-----|
| **Frontend** | HTML5 + CSS3 + ES6 JS | Zero build, instant load |
| **Database** | JSON files in Git | Version control, easy collab |
| **Search** | FuseLJS | Lightweight, offline |
| **Storage** | LocalStorage + IndexedDB | Browser native APIs |
| **Hosting** | GitHub Pages | Free, automatic HTTPS |
| **CI/CD** | GitHub Actions | Auto-deploy on push |

**Zero external dependencies.** Just vanilla web technologies.

See [`ARCHITECTURE.md`](ARCHITECTURE.md) for complete design decisions.

---

## 🎓 Documentation

| Document | Purpose |
|----------|---------|
| **[ARCHITECTURE.md](ARCHITECTURE.md)** | Tech stack & design decisions |
| **[SETUP.md](SETUP.md)** | Local development setup |
| **[FOLDER_STRUCTURE.md](FOLDER_STRUCTURE.md)** | Complete project structure |
| **[docs/USER_STORIES.md](docs/USER_STORIES.md)** | Feature requirements |
| **[docs/DATA_FLOW.md](docs/DATA_FLOW.md)** | How data moves through app |
| **[CHECKLIST.md](CHECKLIST.md)** | Launch & QA checklist |
| **[schemas/\*.json](schemas/)** | JSON Schema validation |

---

## 📈 Performance Targets

✅ **Page Load:** < 2 seconds  
✅ **Search:** < 100ms  
✅ **Offline:** Instant (cached)  
✅ **Mobile:** Fully responsive  
✅ **LCP:** < 1.5s  
✅ **FID:** < 100ms  

**Lighthouse Score Target:** 95+

---

## 🔄 Git Workflow

```
main (production)
  ↑
  ├─ Pull Request (reviewed)
  │
  ├─ feature/add-tools
  ├─ feature/improve-search
  ├─ bugfix/offline-sync
  └─ docs/setup-guide
```

**Merge Requirements:**
1. ✅ Code review (1+ approvals)
2. ✅ JSON validation passes
3. ✅ Mobile responsive test
4. ✅ No performance regression

See [`DEVELOPMENT.md`](docs/DEVELOPMENT.md) for detailed workflow.

---

## 🌍 Internationalization (i18n)

Currently: **German (de) + English (en)**

Files:
- `data/i18n/de.json` - German strings
- `data/i18n/en.json` - English strings

Adding new language:
1. Create `data/i18n/fr.json`
2. Update `src/js/config.js`
3. Test UI in new language
4. Submit PR

---

## 📦 Data Formats

### tools.json (Tool Catalog)
```json
{
  "version": "1.0.0",
  "lastUpdated": "2026-08-06T12:00:00Z",
  "tools": [
    {
      "id": "bosch-gws-18v-125",
      "name": "Bosch GWS 18V-125 Angle Grinder",
      "category": "Angle Grinders",
      "specifications": { "voltage": "18V", "discSize": "125mm" },
      ...
    }
  ]
}
```

**See `schemas/tools-schema.json` for complete schema.**

### user-collection.json (User Export)
```json
{
  "id": "collection-electrician-2026",
  "name": "Electrician's Kit",
  "items": [
    {
      "id": "item-1",
      "toolId": "bosch-gdr-18v-drill",
      "quantity": 1,
      "location": "Drawer 1"
    }
  ]
}
```

**See `schemas/collection-schema.json` for complete schema.**

---

## 🔐 Security

✅ **No Authentication** - All data client-side  
✅ **No External APIs** - No data leaves your device  
✅ **No Cookies** - Privacy respecting  
✅ **HTTPS** - GitHub Pages provides HTTPS  
✅ **Input Validation** - JSON Schema on imports  
✅ **XSS Protection** - All user input sanitized  

---

## 📱 Browser Support

| Browser | Version | Status |
|---------|---------|--------|
| Chrome | 90+ | ✅ Full support |
| Firefox | 88+ | ✅ Full support |
| Safari | 14+ | ✅ Full support |
| Edge | 90+ | ✅ Full support |
| IE 11 | Any | ❌ Not supported |

**All modern browsers supported. Progressive enhancement for older versions.**

---

## 🚨 Known Limitations

| Limitation | Impact | Workaround |
|-----------|--------|-----------|
| JSON < 10MB | Max ~5000 tools | Split into parts |
| No auto-sync | Manual export/import | User-triggered sync |
| Local only | Single device | Export for backup |
| No real-time collab | No multi-user editing | Use PRs for contributions |

---

## 🛠️ Common Tasks

### Add a New Tool
1. Edit `data/tools.json`
2. Add tool object following schema
3. Create PR with changes
4. After merge, tool appears in app

### Create New Collection
1. Open app
2. Click "New Collection"
3. Add tools from catalog
4. Click "Export" to download

### Export User Data
- **JSON:** Full data portability
- **CSV:** Open in Excel/Sheets
- Choose "Export" button in UI

---

## 🐛 Troubleshooting

### Page won't load
- Check internet (first load needs network)
- Clear browser cache (Cmd/Ctrl + Shift + Delete)
- Try incognito/private window

### Search not working
- Browser console (F12) for errors
- Try reloading page
- Check if data/tools.json loaded

### Collections not saving
- Check browser LocalStorage enabled
- See browser storage quota
- Try exporting to backup

**See [`TROUBLESHOOTING.md`](docs/TROUBLESHOOTING.md) for more.**

---

## 💡 Contributing

We welcome contributions!

**Process:**
1. Fork repository
2. Create feature branch: `git checkout -b feature/your-feature`
3. Commit changes: `git commit -m "Add: description"`
4. Push branch: `git push origin feature/your-feature`
5. Open Pull Request
6. Work with maintainers on feedback

**Before PR:**
- ✅ Test locally
- ✅ Validate JSON schema
- ✅ Test mobile responsive
- ✅ No console errors

**See [`DEVELOPMENT.md`](docs/DEVELOPMENT.md) for detailed guidelines.**

---

## 📋 Roadmap

**MVP (Current)** ✅
- Core UI & catalog
- Search functionality
- Basic collections
- Export/Import

**Phase 2 (Planned)**
- Advanced filtering
- Tool recommendations
- Sharing collections
- Analytics dashboard

**Phase 3 (Future)**
- Mobile app (React Native)
- Team collaboration
- Maintenance tracking
- Cost analysis

---

## 📞 Support & Feedback

- **Issues:** https://github.com/bosch-pro-tool/app/issues
- **Discussions:** https://github.com/bosch-pro-tool/app/discussions
- **Email:** support@bosch-pro-tool.dev

---

## 📄 License

MIT License - See [LICENSE](LICENSE) for details.

Free to use, modify, and distribute.

---

## 👥 Team

| Role | Name | Email |
|------|------|-------|
| Tech Lead | Alex | alex@bosch-pro-tool.dev |
| Product Manager | Team | product@bosch-pro-tool.dev |
| Contributors | Community | Open! |

---

## 🙏 Acknowledgments

- **Bosch** - Tools & L-Boxx systems
- **GitHub Pages** - Free hosting
- **FuseLJS** - Search library
- **Community** - Feedback & contributions

---

## 📊 Stats

- **Size:** ~700KB (fully loaded)
- **Load Time:** < 2 seconds
- **Files:** 30+
- **Tools:** 50+ (expandable)
- **Lines of Code:** ~2000
- **Dependencies:** 0 (prod) / 2 (dev)

---

## 🔗 Quick Links

- 🌐 **Live App:** https://bosch-pro-tool.github.io
- 📚 **Documentation:** [docs/](docs/)
- 🏗️ **Architecture:** [ARCHITECTURE.md](ARCHITECTURE.md)
- 🛠️ **Setup Guide:** [SETUP.md](SETUP.md)
- ✅ **Checklist:** [CHECKLIST.md](CHECKLIST.md)
- 🗂️ **Structure:** [FOLDER_STRUCTURE.md](FOLDER_STRUCTURE.md)

---

**Last Updated:** 2026-08-06  
**Version:** 1.0.0 (MVP)  
**Status:** Ready for Development

---

<div align="center">

**Made with ❤️ by Bosch Pro Tool Team**

[⬆ Back to Top](#-bosch-pro-tool)

</div>
