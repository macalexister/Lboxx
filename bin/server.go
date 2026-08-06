package main

import (
    "fmt"
    "net/http"
    "os"
)

func main() {
    port := os.Getenv("PORT")
    if port == "" {
    	port = "8004"
    }
    addr := ":" + port
    fs := http.FileServer(http.Dir("."))

    fmt.Printf("Starting Go HTTP server on http://localhost%s\n", addr)
    fmt.Printf("Serving from: .\n")
    fmt.Println("Press Ctrl+C to stop")

    http.ListenAndServe(addr, fs)
}
