const http = require("http");
const fs = require("fs");
const path = require("path");

// Create server
const server = http.createServer((req, res) => {
    // Log request
    console.log(`Request URL: ${req.url}`);
    console.log(`Request Method: ${req.method}`);

    // Serve HTML file
    if (req.url === "/") {
        const filePath = path.join(__dirname, "index.html");

        fs.readFile(filePath, (err, data) => {
            if (err) {
                res.writeHead(500, { "Content-Type": "text/plain" });
                res.end("Server Error");
            } else {
                res.writeHead(200, { "Content-Type": "text/html" });
                res.end(data);
            }
        });
    } else {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("Page Not Found");
    }
});

// Start server
server.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});