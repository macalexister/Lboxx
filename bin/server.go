package main

import (
    "fmt"
    "net/http"
)

func main() {
    port := ":8004"
    fs := http.FileServer(http.Dir("."))
    
    fmt.Printf("Starting Go HTTP server on http://localhost%s\n", port)
    fmt.Printf("Serving from: .\n")
    fmt.Println("Press Ctrl+C to stop")
    
    http.ListenAndServe(port, fs)
}
