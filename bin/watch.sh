#!/bin/bash

# Auto-reload file watcher for development
# macOS: Uses fswatch
# Linux: Uses inotifywait

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"

echo "🔍 File Watcher - Auto-reload on changes"
echo "📁 Watching: $PROJECT_ROOT/src and $PROJECT_ROOT/data"
echo "⏸  Press Ctrl+C to stop"
echo ""

cd "$PROJECT_ROOT"

if command -v fswatch &> /dev/null; then
    echo "✓ Using fswatch (macOS)"
    fswatch -r src data | while read change; do
        echo "📝 Changed: $(basename $change)"
        echo "   Reload browser to see changes"
    done
elif command -v inotifywait &> /dev/null; then
    echo "✓ Using inotifywait (Linux)"
    inotifywait -r -m -e modify src data |
    while read path action file; do
        echo "📝 Changed: $file"
        echo "   Reload browser to see changes"
    done
else
    echo "❌ File watcher not found"
    echo ""
    echo "Install one of these tools:"
    echo "  macOS:  brew install fswatch"
    echo "  Linux:  sudo apt-get install inotify-tools"
    echo ""
    echo "Or use manual workflow:"
    echo "  1. Save file in editor"
    echo "  2. Refresh browser (F5 or Cmd+R)"
    exit 1
fi
