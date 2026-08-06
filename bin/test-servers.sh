#!/bin/bash

# Test script for all server options
# Verifies each server option works correctly

PROJECT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$PROJECT_ROOT"

echo "🧪 Testing All Server Options"
echo "=============================="
echo ""

# Test file to check
TEST_FILE="src/index.html"
TEST_PORT=""

test_server() {
    local name=$1
    local port=$2
    local cmd=$3
    local check_cmd=$4
    
    echo "Testing: $name (port $port)"
    
    # Start server
    eval "$cmd" > /tmp/server_${port}.log 2>&1 &
    SERVER_PID=$!
    
    # Wait for server to start
    sleep 2
    
    # Test with curl
    response=$(curl -s -o /dev/null -w "%{http_code}" "http://localhost:$port/$TEST_FILE" 2>/dev/null)
    
    if [ "$response" = "200" ]; then
        echo "  ✅ PASS - HTTP $response"
        result="PASS"
    else
        echo "  ❌ FAIL - HTTP $response"
        result="FAIL"
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
test_server "Python 3" "8000" "python3 -m http.server 8000 --directory ." "python3"

# Node.js
if command -v npx &> /dev/null; then
    test_server "Node.js npx" "8001" "npx -y http-server . -p 8001 -c-1" "npx"
else
    echo "Node.js - Skipped (npx not found)"
fi

# PHP
if command -v php &> /dev/null; then
    test_server "PHP" "8002" "php -S localhost:8002" "php"
else
    echo "PHP - Skipped (not installed)"
fi

# Ruby
if command -v ruby &> /dev/null; then
    test_server "Ruby" "8003" "ruby -run -ehttpd . -p 8003" "ruby"
else
    echo "Ruby - Skipped (not installed)"
fi

# Go
if command -v go &> /dev/null; then
    test_server "Go" "8004" "go run bin/server.go" "go"
else
    echo "Go - Skipped (not installed)"
fi

echo ""
echo "=============================="
echo "✓ Test complete"
