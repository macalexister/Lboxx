# 🛠️ SETUP GUIDE - Local Development

**Get Bosch Pro Tool running on your machine in 5 minutes.**

---

## ✅ Prerequisites

- **Git** (any version)
- **Web Browser** (Chrome 90+, Firefox 88+, Safari 14+)
- **Text Editor** (VS Code, Sublime, etc.)
- **Terminal** (bash, zsh, cmd)

**NOT Required:**
- ❌ Node.js
- ❌ npm / yarn
- ❌ Python build tools
- ❌ Docker
- ❌ Any package manager

---

## 🚀 Quick Start (5 Minutes)

### Step 1: Clone Repository
```bash
git clone https://github.com/bosch-pro-tool/app.git bosch-pro-tool
cd bosch-pro-tool
```

### Step 2: Start Local Server

**Option A: Python (Most Common)**
```bash
# Python 3
python -m http.server 8000

# Python 2 (older systems)
python -m SimpleHTTPServer 8000
```

**Option B: Node.js (if you have npm)**
```bash
npx http-server -p 8000
```

**Option C: Node.js (if installed globally)**
```bash
http-server -p 8000
```

**Option D: VS Code Live Server Extension**
- Install: https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer
- Right-click `src/index.html` → "Open with Live Server"

**Option E: macOS using Ruby**
```bash
ruby -run -ehttpd . -p 8000
```

### Step 3: Open in Browser
```
http://localhost:8000
```

✅ **App is live!** Changes to files reload automatically (with manual refresh or Live Server).

---

## 🗂️ Project Structure Overview

```
bosch-pro-tool/
├── src/
│   ├── index.html          ← Main application
│   ├── js/
│   │   ├── app.js          ← Edit here for logic
│   │   ├── storage.js
│   │   ├── search.js
│   │   └── config.js
│   └── css/
│       ├── main.css        ← Edit here for styling
│       ├── responsive.css
│       └── dark-mode.css
│
├── data/
│   ├── tools.json          ← Edit here for tool catalog
│   ├── lboxx.json
│   └── metadata.json
│
├── docs/
│   ├── README.md           ← Main README
│   ├── ARCHITECTURE.md     ← Tech decisions
│   └── ...
│
└── schemas/
    ├── tools-schema.json   ← Validation rules
    └── collection-schema.json
```

---

## 📝 Common Edits

### Add a New Tool to Catalog
Edit `data/tools.json`:
```json
{
  "tools": [
    {
      "id": "bosch-new-tool-id",
      "name": "Bosch Tool Name",
      "category": "Power Drills",
      "type": "cordless",
      "description": "Tool description here",
      "specifications": {
        "voltage": "18V",
        "power": "900W"
      },
      "bestFor": ["drilling", "screwing"]
    }
  ]
}
```

**Then:** Reload browser to see changes.

### Change Styling
Edit `src/css/main.css`:
```css
/* Change app colors */
:root {
  --color-primary: #0066cc;
  --color-accent: #ff6b35;
}

/* Modify tool card styling */
.tool-card {
  background: var(--color-card);
  border-radius: 8px;
  padding: 16px;
}
```

**Then:** Reload browser to see styling updates.

### Add Search Feature
Edit `src/js/app.js`:
```javascript
// Add search functionality
function initSearch() {
  const searchInput = document.querySelector('#search');
  searchInput.addEventListener('input', (e) => {
    const term = e.target.value;
    performSearch(term);
  });
}
```

---

## 🔍 Debug & Inspect

### Browser DevTools
Press `F12` (Windows/Linux) or `Cmd+Option+I` (Mac)

**Check these tabs:**
- **Console** - JavaScript errors
- **Network** - JSON file loading
- **Application** - LocalStorage/IndexedDB
- **Elements** - HTML/CSS inspection

### Common Issues

| Issue | Fix |
|-------|-----|
| **404 error loading JSON** | Check file path in `src/js/app.js` |
| **Search not working** | Check console for errors, verify `data/tools.json` loaded |
| **Styles not applying** | Clear browser cache (Cmd/Ctrl + Shift + Delete) |
| **Collections not saving** | Check LocalStorage enabled in browser settings |

### View Console Logs
```javascript
// In any JS file:
console.log('Debug info:', data);
console.error('Error:', error);
console.table(arrayOfObjects);  // Pretty print
```

---

## 🧪 Testing Locally

### Test Search Feature
1. Open app in browser
2. Click search box (or press Cmd+F)
3. Type: "drill"
4. Should see drilling tools instantly

### Test Dark Mode
1. Open browser DevTools (F12)
2. Click "Application" tab
3. Expand "Local Storage"
4. Set: `bosch-pro-theme = "dark"`
5. Reload page

### Test Offline
1. Open app normally
2. Go offline (DevTools → Network → Offline)
3. App should still work with cached data
4. Go back online (Network → Online)

### Test Mobile Responsive
1. Open DevTools (F12)
2. Click device toggle (top-left corner)
3. Select "iPhone 12" or similar
4. UI should adapt to small screen

---

## 🔄 Git Workflow

### Create Feature Branch
```bash
git checkout -b feature/your-feature-name
```

### Make Changes
```bash
# Edit files as needed
# Test locally with python -m http.server 8000
```

### Commit Changes
```bash
git add .
git commit -m "Add: description of what you added"
# or
git commit -m "Fix: description of what you fixed"
# or
git commit -m "Docs: update documentation"
```

### Push to GitHub
```bash
git push origin feature/your-feature-name
```

### Open Pull Request
1. Go to https://github.com/bosch-pro-tool/app
2. Click "New Pull Request"
3. Select your branch
4. Add description
5. Request reviewers
6. Wait for approval

### Merge to Main
```bash
# After PR approval:
git checkout main
git pull origin main
git merge feature/your-feature-name
git push origin main
```

---

## 📦 Adding External Libraries

### FuseLJS (Search Library) - Already Included
Location: `src/js/vendor/fuse.min.js`

Usage in `src/js/search.js`:
```javascript
const fuse = new Fuse(items, options);
const results = fuse.search(query);
```

### Adding New Library (if needed)
1. Download minified library file
2. Place in `src/js/vendor/`
3. Include in `src/index.html`:
   ```html
   <script src="js/vendor/library-name.min.js"></script>
   ```
4. Use in your code
5. Add to .gitignore if large

**Rule:** Only add libraries if absolutely necessary. Prefer vanilla JS.

---

## 🚨 Validation Before Deploy

### JSON Schema Validation
```bash
# Check if tools.json is valid
# (use online validator: https://www.jsonschemavalidator.net/)

# OR use Python validator:
python -m json.tool data/tools.json > /dev/null && echo "✓ Valid"
```

### Lighthouse Performance Check
1. Open DevTools (F12)
2. Click "Lighthouse" tab
3. Click "Analyze page load"
4. Target: Score 95+

### Mobile Responsive Test
- [ ] Test on iPhone 12 (375px width)
- [ ] Test on iPad (768px width)
- [ ] Test on Desktop (1920px width)
- [ ] All UI elements visible
- [ ] Touch targets > 44px

### Browser Compatibility Test
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)

---

## 📚 Useful Resources

### Local Development
- Python http.server: https://docs.python.org/3/library/http.server.html
- VS Code Live Server: https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer
- Browser DevTools: https://developer.chrome.com/docs/devtools/

### Web Standards
- HTML5: https://html.spec.whatwg.org/
- CSS3: https://www.w3.org/Style/CSS/
- JavaScript ES6+: https://tc39.es/ecma262/
- LocalStorage API: https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
- IndexedDB: https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API

### Design & Testing
- Lighthouse: https://developers.google.com/web/tools/lighthouse
- WAVE Accessibility: https://wave.webaim.org/
- Can I Use: https://caniuse.com/

---

## 🔧 Troubleshooting Setup

### "Connection refused" on port 8000
```bash
# Port might be in use. Try different port:
python -m http.server 8001
# Then open: http://localhost:8001
```

### "Permission denied" error
```bash
# Try with sudo (not ideal, but works):
sudo python -m http.server 80
```

### CORS errors loading JSON
**This shouldn't happen** on localhost, but if it does:
- Ensure server is running from project root
- Try a different browser
- Clear cache (Cmd/Ctrl + Shift + Delete)

### Git clone fails
```bash
# Ensure git is installed:
git --version

# Try HTTPS instead of SSH:
git clone https://github.com/bosch-pro-tool/app.git
```

---

## ✅ Verify Setup Works

### Final Checklist
- [ ] Clone repository successful
- [ ] Local server running (port 8000 or similar)
- [ ] Browser loads http://localhost:8000
- [ ] Tool catalog visible
- [ ] Search bar works
- [ ] Dark/light toggle works
- [ ] Can create test collection
- [ ] DevTools console shows no errors
- [ ] Mobile responsive view works

If all pass ✅ → **Setup complete!**

---

## 🎓 Next Steps

1. **Read:** [ARCHITECTURE.md](../ARCHITECTURE.md) - Understand design decisions
2. **Explore:** `src/index.html` - View app structure
3. **Make Changes:** Edit `src/js/app.js` or `data/tools.json`
4. **Test:** Refresh browser, verify changes
5. **Commit:** `git add . && git commit -m "Your change"`
6. **Create PR:** Push branch and open pull request

---

## 💡 Pro Tips

### Quick Reload
- **Chrome/Firefox/Edge:** Cmd/Ctrl + Shift + R (hard refresh)
- **Safari:** Cmd + Shift + R

### Mobile Testing
- Use Chrome DevTools device emulation
- Or use actual phone on same WiFi (use your local IP: `192.168.x.x:8000`)

### Debug Search
```javascript
// Add to src/js/search.js:
console.log('Search term:', query);
console.log('Results count:', results.length);
console.table(results);
```

### Monitor Storage
```javascript
// View LocalStorage:
console.log(localStorage);

// View IndexedDB:
// Use DevTools Application tab
```

---

## 🚀 Ready to Code!

You're all set. Happy developing! 🎉

**Questions?** Check [TROUBLESHOOTING.md](../docs/TROUBLESHOOTING.md) or open an issue.

---

**Last Updated:** 2026-08-06  
**Maintainer:** Bosch Pro Tool Team
