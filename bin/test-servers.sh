#!/bin/bash

# Test script for all server options
# Verifies each server option works correctly

PROJECT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$PROJECT_ROOT"

echo "🧪 Testing All Server Options"
echo "=============================="
echo ""

# Test files to check
TEST_FILES=(
    "index.html"
    "main.js"
    "styles/main.css"
    "lib/fuse.js"
    "data/sample-tools.json"
)

pick_free_port() {
    local start_port=$1
    local port=$start_port
    while lsof -iTCP:${port} -sTCP:LISTEN >/dev/null 2>&1; do
        port=$((port + 1))
    done
    echo "$port"
}

test_server() {
    local name=$1
    local base_port=$2
    local cmd_template=$3
    local port
    local cmd
    
    port=$(pick_free_port "$base_port")
    cmd=${cmd_template//\{PORT\}/$port}

    echo "Testing: $name (port $port)"
    
    # Start server
    eval "$cmd" > /tmp/server_${port}.log 2>&1 &
    SERVER_PID=$!
    
    # Wait for server to start (npx can take longer on first run)
    local ready=0
    for _ in $(seq 1 15); do
        probe=$(curl -s -o /dev/null -w "%{http_code}" "http://localhost:$port/index.html" 2>/dev/null)
        if [ "$probe" = "200" ]; then
            ready=1
            break
        fi
        sleep 1
    done
    
    # Test with curl
    result="PASS"
    if [ "$ready" -ne 1 ]; then
        echo "  ❌ FAIL - server did not become ready within timeout"
        result="FAIL"
    else
        for file in "${TEST_FILES[@]}"; do
            response=$(curl -s -o /dev/null -w "%{http_code}" "http://localhost:$port/$file" 2>/dev/null)
            if [ "$response" = "200" ]; then
                echo "  ✅ PASS - /$file HTTP $response"
            else
                echo "  ❌ FAIL - /$file HTTP $response"
                result="FAIL"
            fi
        done
    fi
    
    # Kill server
    kill $SERVER_PID 2>/dev/null
    wait $SERVER_PID 2>/dev/null
    
    echo ""
    echo "$name|$port|$result"
}

# Run tests (comment out servers not installed)
echo "Starting tests..."
echo ""

# Python
test_server "Python 3" "18888" "python3 -m http.server {PORT} --directory ."

# Node.js
if command -v npx &> /dev/null; then
    test_server "Node.js npx" "18889" "npx -y http-server . -p {PORT} -c-1"
else
    echo "Node.js - Skipped (npx not found)"
fi

# PHP
if command -v php &> /dev/null; then
    test_server "PHP" "18891" "php -S localhost:{PORT}"
else
    echo "PHP - Skipped (not installed)"
fi

# Ruby
if command -v ruby &> /dev/null; then
    test_server "Ruby" "18890" "ruby -run -ehttpd . -p {PORT}"
else
    echo "Ruby - Skipped (not installed)"
fi

# Go
if command -v go &> /dev/null; then
    test_server "Go" "18892" "PORT={PORT} go run bin/server.go"
else
    echo "Go - Skipped (not installed)"
fi

echo ""
echo "=============================="
echo "✓ Test complete"
