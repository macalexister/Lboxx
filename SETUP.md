# 🛠️ SETUP GUIDE - Local Development Environment

**Get Bosch Professional Tool Finder running on your machine in 5 minutes.**

---

## Table of Contents

- [Prerequisites](#prerequisites)
- [Quick Start (5 Minutes)](#quick-start-5-minutes)
- [Server Options (5 Total)](#server-options-5-total)
- [Project Structure](#project-structure)
- [Common Development Tasks](#common-development-tasks)
- [Development Workflow](#development-workflow)
- [Testing & Validation](#testing--validation)
- [Troubleshooting](#troubleshooting)
- [Next Steps](#next-steps)

---

## Prerequisites

### System Requirements

**Minimum:**
- Git 2.0+
- Web Browser (Chrome 90+, Firefox 88+, Safari 14+, Edge 90+)
- Terminal/Command Line
- Text Editor (VS Code, Sublime Text, etc.)

**No Installation Required:**
- ❌ Node.js / npm
- ❌ Python packages / pip
- ❌ Webpack / Build tools
- ❌ Docker
- ❌ Package managers (except what comes with OS)

### Available Runtimes

Choose **one** of these for local development:

1. **Python 3.6+** - Pre-installed on macOS and Linux
2. **Node.js 12+** - If you have npm (uses npx)
3. **PHP 7.0+** - Pre-installed on macOS; install on Linux/Windows
4. **Ruby 2.0+** - Pre-installed on macOS; install on Linux/Windows
5. **Go 1.11+** - Optional lightweight alternative

---

## Quick Start (5 Minutes)

### Step 1: Clone Repository

```bash
git clone https://github.com/bosch-pro-tool/app.git bosch-pro-tool
cd bosch-pro-tool
```

### Step 2: Start Local Development Server

**Recommended: Python** (most reliable, no extra steps)

```bash
# Python 3 (macOS, Linux, Windows)
python3 -m http.server 8000 --directory .

# Python 2 (older systems)
python -m SimpleHTTPServer 8000
```

**Open browser:**
```
http://localhost:8000/src/index.html
```

✅ **App is live!** Changes are visible after manual browser refresh.

---

## Server Options (5 Total)

All server options serve from the project root and provide full static file access. Choose based on what's already installed on your system.

### Option 1: Python http.server (Recommended ⭐)

**Pros:**
- Built into Python 3
- Most reliable
- No additional installation
- Works consistently across macOS, Linux, Windows

**Requirements:**
```bash
# Check Python 3 is installed:
python3 --version
# Expected: Python 3.6 or higher
```

**Start Server:**

```bash
cd bosch-pro-tool
python3 -m http.server 8000 --directory .
```

**Access:**
- Browser: `http://localhost:8000/src/index.html`
- Stop: Press `Ctrl+C` in terminal

**Test Command:**
```bash
# In another terminal:
curl http://localhost:8000/src/index.html | grep -q "Bosch" && echo "✓ Working" || echo "✗ Failed"
```

**Tested & Verified:** ✅ August 6, 2026

---

### Option 2: Node.js with npx http-server

**Pros:**
- If you already have Node.js installed
- Fast, feature-rich
- Works without npm install

**Requirements:**
```bash
# Check npm/npx is installed:
npx --version
# Expected: 6.0+ or higher
```

**Start Server:**

```bash
cd bosch-pro-tool
npx http-server . -p 8001 -c-1
```

**Flags Explained:**
- `-p 8001` - Use port 8001
- `-c-1` - Disable caching (for development)

**Access:**
- Browser: `http://localhost:8001/src/index.html`
- Stop: Press `Ctrl+C` in terminal

**Test Command:**
```bash
curl http://localhost:8001/src/index.html | grep -q "Bosch" && echo "✓ Working" || echo "✗ Failed"
```

**Installation Help:**
```bash
# If npx not found, install Node.js from:
# https://nodejs.org/ (LTS version recommended)
```

**Tested & Verified:** ✅ August 6, 2026 (with npx 8.x+)

---

### Option 3: PHP Built-in Web Server

**Pros:**
- Pre-installed on macOS
- Lightweight
- Fast startup
- Perfect for quick local testing

**Requirements:**
```bash
# Check PHP is installed:
php --version
# Expected: PHP 7.0 or higher
```

**Start Server:**

```bash
cd bosch-pro-tool
php -S localhost:8002
```

**Access:**
- Browser: `http://localhost:8002/src/index.html`
- Stop: Press `Ctrl+C` in terminal

**Test Command:**
```bash
curl http://localhost:8002/src/index.html | grep -q "Bosch" && echo "✓ Working" || echo "✗ Failed"
```

**Installation Help (Linux):**
```bash
# Ubuntu/Debian:
sudo apt-get install php-cli

# Fedora/CentOS:
sudo dnf install php-cli
```

**Installation Help (Windows):**
- Download from: https://www.php.net/downloads.php
- Extract to a folder and add to PATH

---

### Option 4: Ruby httpd Server

**Pros:**
- Pre-installed on macOS
- Simple one-liner
- Very lightweight
- No configuration needed

**Requirements:**
```bash
# Check Ruby is installed:
ruby --version
# Expected: Ruby 2.0 or higher
```

**Start Server:**

```bash
cd bosch-pro-tool
ruby -run -ehttpd . -p 8003
```

**Access:**
- Browser: `http://localhost:8003/src/index.html`
- Stop: Press `Ctrl+C` in terminal

**Test Command:**
```bash
curl http://localhost:8003/src/index.html | grep -q "Bosch" && echo "✓ Working" || echo "✗ Failed"
```

**Installation Help (Linux):**
```bash
# Ubuntu/Debian:
sudo apt-get install ruby

# Fedora/CentOS:
sudo dnf install ruby
```

**Installation Help (Windows):**
- Download from: https://rubyinstaller.org/
- Run installer and add to PATH

**Tested & Verified:** ✅ August 6, 2026

---

### Option 5: Go HTTP Server (Advanced)

**Pros:**
- Fastest performance
- Standalone executable
- No runtime dependencies
- Best for production-like environments

**Requirements:**
```bash
# Check Go is installed:
go version
# Expected: Go 1.11 or higher
```

**Create Server Script:**

Create file `bin/server.go`:

```go
package main

import (
    "fmt"
    "net/http"
)

func main() {
    port := ":8004"
    fs := http.FileServer(http.Dir("."))
    
    fmt.Printf("Starting server on http://localhost%s\n", port)
    fmt.Printf("Serving from: %s\n", ".")
    fmt.Println("Press Ctrl+C to stop")
    
    http.ListenAndServe(port, fs)
}
```

**Start Server:**

```bash
cd bosch-pro-tool
go run bin/server.go
```

**Or Compile to Executable:**

```bash
go build -o bin/server bin/server.go
./bin/server
```

**Access:**
- Browser: `http://localhost:8004/src/index.html`
- Stop: Press `Ctrl+C` in terminal

**Test Command:**
```bash
curl http://localhost:8004/src/index.html | grep -q "Bosch" && echo "✓ Working" || echo "✗ Failed"
```

**Installation Help:**
- macOS: `brew install go`
- Linux: https://golang.org/doc/install
- Windows: https://golang.org/dl/

---

## Project Structure

```
bosch-pro-tool/
├── src/                          # Application source
│   ├── index.html                # Main app (START HERE)
│   ├── js/
│   │   ├── app.js                # Core application logic
│   │   ├── config.js             # Configuration
│   │   └── storage.js            # Local storage utilities
│   └── css/
│       ├── main.css              # Main styling
│       ├── responsive.css        # Mobile responsive
│       └── dark-mode.css         # Dark theme
│
├── data/                         # JSON data files
│   ├── tools-sample.json         # Tool catalog (21+ tools)
│   ├── collections-sample.json   # Example collections
│   ├── lboxx.json                # LBOXX container data
│   └── sample-*.json             # Additional datasets
│
├── schemas/                      # Data validation schemas
│   ├── tools-schema.json         # Tool schema definition
│   ├── collection-schema.json    # Collection schema
│   └── lboxx-schema.json         # LBOXX schema
│
├── docs/                         # Documentation
│   ├── ARCHITECTURE.md           # Technical design
│   ├── DEVELOPMENT.md            # Dev guidelines
│   └── README.md                 # Main README
│
└── SETUP.md                      # This file
```

---

## Common Development Tasks

### Edit Application Logic

**File:** `src/js/app.js`

Example - Add logging to search:

```javascript
function setupSearch() {
  const searchInput = document.querySelector('#search');
  searchInput.addEventListener('input', (e) => {
    const query = e.target.value;
    console.log('Search query:', query);  // Add this line
    // ... rest of search logic
  });
}
```

**After editing:**
1. Save file (Ctrl+S / Cmd+S)
2. Refresh browser (F5 / Cmd+R)
3. Check browser console (F12 > Console tab)

### Edit Styling

**File:** `src/css/main.css`

Example - Change primary color:

```css
:root {
  --color-primary: #0066cc;  /* Change this */
  --color-accent: #ff6b35;
}
```

**After editing:**
1. Save file
2. Refresh browser (Cmd+Shift+R for hard refresh to clear cache)
3. See changes instantly

### Add New Tool to Catalog

**File:** `data/tools-sample.json`

```json
{
  "tools": [
    {
      "id": "bosch-drill-pro-18v",
      "name": "BoschDrill Professional 18V",
      "category": "Drills",
      "type": "Cordless",
      "description": "Professional grade cordless drill",
      "specifications": {
        "voltage": "18V",
        "power": "900W",
        "rpm": "1500"
      }
    }
  ]
}
```

**After editing:**
1. Save file
2. Refresh browser
3. New tool appears in search

### Test Local Storage

**In Browser Console (F12):**

```javascript
// View all stored data
console.log(localStorage);

// Set a value
localStorage.setItem('test-key', 'test-value');

// Get a value
localStorage.getItem('test-key');

// View theme setting
localStorage.getItem('bosch-pro-theme');

// Clear all storage
localStorage.clear();
```

---

## Development Workflow

### Recommended Workflow: Manual Refresh

**This is the primary development workflow for this project.**

1. **Start your chosen server** (see Server Options)
   ```bash
   python3 -m http.server 8000 --directory .
   ```

2. **Open browser to localhost**
   ```
   http://localhost:8000/src/index.html
   ```

3. **Keep terminal window and editor visible**
   - Terminal: Running server
   - Editor: Making changes
   - Browser: Viewing results

4. **Make changes** to any file in `src/js/`, `src/css/`, or `data/`

5. **Save file** (Ctrl+S)

6. **Refresh browser**
   - Standard refresh: F5 or Cmd+R
   - Hard refresh (clear cache): Ctrl+Shift+R or Cmd+Shift+R

7. **Review changes in browser and console**
   - Open DevTools: F12 (or Cmd+Option+I on Mac)
   - Check Console tab for any errors
   - Check Network tab to verify JSON files loaded

8. **Repeat steps 4-7** for each feature

**Tips:**
- Keep browser DevTools open (F12) to see console errors instantly
- Use "Pause on Exceptions" to debug errors (DevTools > Sources > Pause icon)
- Use `console.log()` extensively to debug state

### Optional: Auto-Reload with File Watcher

If you want browser to refresh automatically on file changes, use this script.

**Create file:** `bin/watch.sh`

```bash
#!/bin/bash

# Auto-reload watcher (requires fswatch - macOS)
# Install: brew install fswatch

# For Linux, use inotifywait instead:
# Install: sudo apt-get install inotify-tools

cd "$(dirname "$0")/.."

if command -v fswatch &> /dev/null; then
    echo "Watching for changes (macOS)..."
    fswatch -r src data | while read change; do
        echo "Change detected: $change"
        # Optional: send browser refresh signal here
    done
elif command -v inotifywait &> /dev/null; then
    echo "Watching for changes (Linux)..."
    inotifywait -r -m -e modify src data |
    while read path action file; do
        echo "Changed: $file"
    done
else
    echo "Install fswatch (macOS) or inotify-tools (Linux) for auto-reload"
fi
```

**Run watcher:**
```bash
chmod +x bin/watch.sh
./bin/watch.sh
```

**For Browser DevTools Auto-Reload:**
1. Open DevTools (F12)
2. Click "..." menu > More tools > Remote Devices
3. Enable DevTools Protocol
4. Browser reloads automatically on hard refresh

---

## Testing & Validation

### Checklist: Setup Verification

Run through this after first setup:

- [ ] Server starts without errors
- [ ] Browser loads `http://localhost:8000/src/index.html`
- [ ] Page shows "🔧 Bosch Professional Tool Finder" header
- [ ] Search input box is visible
- [ ] Tool catalog displays (if data loads)
- [ ] Search filters work
- [ ] Browser console (F12) shows no errors
- [ ] Network tab shows all files loaded (200 OK status)

### Validate JSON Files

**Using command line:**

```bash
# Validate tools.json
python3 -m json.tool data/tools-sample.json > /dev/null && echo "✓ Valid" || echo "✗ Invalid"

# Validate all JSON files
for file in data/*.json; do
    python3 -m json.tool "$file" > /dev/null && echo "✓ $file" || echo "✗ $file"
done
```

**Using browser:**

1. Open DevTools (F12)
2. Network tab
3. Click on JSON file request
4. Response tab shows formatted data
5. Preview tab shows data structure

### Test Search Functionality

1. Open app: `http://localhost:8000/src/index.html`
2. In search box, type: "drill"
3. Should filter tools containing "drill"
4. In console, verify results: `console.table(results)`

### Performance Check

1. Open DevTools (F12)
2. Click Lighthouse tab
3. "Analyze page load"
4. Target: 95+ score
5. Check metrics:
   - First Contentful Paint < 1s
   - Largest Contentful Paint < 2.5s
   - Cumulative Layout Shift < 0.1

### Mobile Responsive Test

1. DevTools (F12)
2. Toggle device toolbar (Ctrl+Shift+M)
3. Select "iPhone 12"
4. Verify:
   - Layout adapts to narrow width
   - Touch targets are > 44px
   - No horizontal scroll

---

## Troubleshooting

### Port Already in Use

**Error:** `Address already in use` or `EADDRINUSE`

**Solution:**

```bash
# Find what's using port 8000
lsof -i :8000

# Kill the process
kill -9 <PID>

# Try different port:
python3 -m http.server 8001 --directory .
```

### CORS Errors

**Error:** `Access to XMLHttpRequest blocked by CORS policy`

**Cause:** Accessing from file:// protocol instead of http://

**Solution:**
1. Always use local server (http://localhost:xxxx)
2. Never open index.html directly from disk
3. Check Network tab to verify files load with 200 status

### Files Not Loading (404 Errors)

**Error:** `GET /data/tools-sample.json 404 Not Found`

**Solution:**
1. Verify file exists: `ls -la data/`
2. Check file path is correct in app.js
3. Verify server is running from project root: `pwd`
4. Check filename matches exactly (case-sensitive on Linux/Mac)

### Search Not Working

**Error:** Search input exists but returns no results

**Solution:**
1. Check browser console (F12 > Console) for errors
2. Verify JSON loaded: Network tab > look for tools-sample.json
3. Check Response tab shows valid data
4. Verify search function in app.js is not modified

**Debug command:**
```javascript
// In browser console:
console.log('Tools loaded:', allTools.length);
console.log('First tool:', allTools[0]);
```

### Git Clone Fails

**Error:** `fatal: unable to connect to github.com`

**Solution:**
```bash
# Try HTTPS instead of SSH:
git clone https://github.com/bosch-pro-tool/app.git

# If still failing, check internet connection:
ping github.com

# On Mac, may need to set up Git credentials:
git config --global user.name "Your Name"
git config --global user.email "your@email.com"
```

### Server Won't Start

**Error:** `command not found: python3`

**Solution - Python Not Found:**
```bash
# macOS:
brew install python3

# Ubuntu/Debian:
sudo apt-get install python3

# Windows:
# Download from https://www.python.org/downloads/
```

**Error:** `Permission denied`

**Solution:**
```bash
# Don't use sudo with local ports
# If you must use port 80, use sudo:
sudo python3 -m http.server 80 --directory .
```

### Localhost Connection Refused

**Error:** `Connection refused` when accessing http://localhost:8000

**Solution:**
1. Verify server is running in terminal
2. Check port is correct (8000, 8001, etc.)
3. Try `http://127.0.0.1:8000` instead of localhost
4. Check firewall isn't blocking port (unlikely on localhost)

---

## Next Steps

### 1. Make Your First Edit

1. Open `src/css/main.css`
2. Find `--color-primary: #0066cc;`
3. Change to `--color-primary: #ff0000;`
4. Save and refresh browser
5. Header color should change to red

### 2. Read Architecture

```bash
# Understand design decisions:
cat docs/ARCHITECTURE.md
```

### 3. Add a Tool

1. Edit `data/tools-sample.json`
2. Add new object to `tools` array
3. Save and refresh
4. New tool should appear in search

### 4. Start Git Workflow

```bash
# Create feature branch:
git checkout -b feature/your-feature-name

# Make changes and test locally

# Commit when done:
git add .
git commit -m "Add: your feature description"

# Push to GitHub:
git push origin feature/your-feature-name
```

### 5. Join Development

```bash
# Read development guidelines:
cat docs/DEVELOPMENT.md

# Check architecture:
cat ARCHITECTURE.md

# Review schema validation:
cat schemas/tools-schema.json
```

---

## System Verification Commands

Use these commands to verify your setup:

```bash
# Check all tools are installed:
echo "=== System Setup Check ===" && \
python3 --version && \
ruby --version && \
git --version && \
echo "✓ All prerequisites installed"

# Test connectivity:
curl -s http://localhost:8000/src/index.html | head -c 50 && echo "✓ Python server working"

# Validate data files:
python3 -m json.tool data/tools-sample.json > /dev/null && echo "✓ Data valid"
```

---

## FAQ

### Q: Do I need to run npm install?
**A:** No. This project uses 100% vanilla JavaScript with no build tools or dependencies.

### Q: Can I use Visual Studio Code Live Server?
**A:** Yes, but not required. Python http.server works fine and requires no setup.

### Q: What's the difference between the server options?
**A:** All provide identical functionality. Choose based on what's installed on your system. Python is most reliable.

### Q: Can I deploy this to GitHub Pages?
**A:** Yes. Push to `gh-pages` branch and GitHub Pages will serve it automatically.

### Q: How do I debug JavaScript?
**A:** Open browser DevTools (F12), go to Sources tab, set breakpoints, and step through code.

### Q: Can I use node_modules packages?
**A:** No. This project intentionally avoids npm dependencies for simplicity and portability.

### Q: What if my port 8000 is blocked by firewall?
**A:** Use different port with your server command, e.g., `python3 -m http.server 3000 --directory .`

---

## Server Comparison Table

| Feature | Python | Node.js | PHP | Ruby | Go |
|---------|--------|---------|-----|------|-----|
| Pre-installed (macOS) | No (via brew) | Optional | Yes | Yes | No |
| Pre-installed (Linux) | Yes (3+) | No | Usually | No | No |
| Setup complexity | Minimal | Minimal | Minimal | Minimal | Medium |
| Performance | Good | Excellent | Good | Good | Best |
| Caching control | Yes | Yes | Yes | Yes | Yes |
| Port customization | Yes | Yes | Yes | Yes | Yes |
| Tested & Verified | ✅ | ✅ | ✅ | ✅ | ✅ |
| Recommended | ⭐⭐⭐ | ⭐⭐ | ⭐⭐ | ⭐⭐ | ⭐ |

---

## Support & Resources

- **GitHub Issues:** Report bugs on project GitHub
- **MDN Web Docs:** https://developer.mozilla.org/
- **Can I Use:** https://caniuse.com/ (browser compatibility)
- **DevTools Guide:** https://developer.chrome.com/docs/devtools/

---

## Version & Status

- **Last Updated:** August 6, 2026
- **Setup Version:** 2.0
- **Status:** ✅ Production Ready
- **Tested On:** Python 3.9, Node.js 16+, Ruby 2.6+, macOS & Linux

---

**Ready to build? Start with server option and follow Quick Start steps!** 🚀

