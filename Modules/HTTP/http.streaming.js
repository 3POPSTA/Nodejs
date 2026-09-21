const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((request, response) => {
    // Prevent path traversal by resolving the absolute path and checking boundaries
    const filePath = path.resolve(__dirname, "." + request.url);

    if (!filePath.startsWith(__dirname)) {
        response.statusCode = 403;
        response.end("Access denied");
        return;
    }

    fs.stat(filePath, (error, stats) => {
        // If the file does not exist, or if it is a folder instead of a file, return 404
        if (error || !stats.isFile()) {
            response.statusCode = 404;
            response.end("File not found");
            return;
        }

        response.setHeader('Content-Length', stats.size);
        response.setHeader('Content-Type', 'application/octet-stream');

        const stream = fs.createReadStream(filePath);

        stream.on("error", (error) => {
            console.log("Error reading file: ", error);
            if (!response.headersSent) {
                response.statusCode = 500;
                response.end('Error reading file');
            }
        });

        stream.pipe(response);
    });
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`File server running at http://localhost:${PORT}/`);
});