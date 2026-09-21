const https = require("https");
const fs = require("fs");
const path = require("path");

const sslOptions = {
  key: fs.readFileSync(path.join(__dirname, "key.pem")),
  cert: fs.readFileSync(path.join(__dirname, "cert.pem")),
  minVersion: "TLSv1.2"
};

const server = https.createServer(sslOptions, (request, response) => {
  if (process.env.NODE_ENV === "production") {
    response.setHeader("Strict-Transport-Security", "max-age=31536000; includeSubDomains");
  }
  response.setHeader("X-Content-Type-Options", "nosniff");
  response.setHeader("X-Frame-Options", "SAMEORIGIN");
  response.setHeader("Referrer-Policy", "strict-origin-when-cross-origin");
  response.setHeader("Content-Security-Policy", "default-src 'self'");

  const { pathname } = new URL(request.url, `https://${request.headers.host}`);

  if (pathname === "/") {
    response.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    response.end(`
      <h1>Welcome to the Secure Server</h1>
      <p>Your connection is encrypted!</p>
    `);
  } else if (pathname === "/api/status") {
    response.writeHead(200, { "Content-Type": "application/json" });
    response.end(JSON.stringify({ status: "ok", time: new Date().toISOString() }, null, 2));
  } else {
    response.writeHead(404, { "Content-Type": "text/plain" });
    response.end("404 Not Found");
  }
});

server.on("error", (error) => {
  console.log("Server error:", error);
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running at https://localhost:${PORT}`);
  console.log("Press Ctrl+C to stop the server");
});