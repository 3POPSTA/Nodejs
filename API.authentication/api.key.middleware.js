const express = require("express");
const app = express();

// Middleware to parse incoming JSON request bodies (FIX #1)
app.use(express.json());

// In-memory storage for API keys (use a database in production)
const apikeys = new Map([
    ["abc123", { name: "Mobile App", permissions: ["read:data"] }],
    ["def456", { name: "Web Client", permissions: ["read:data", "write:data"] }],
]);

// API key authentication middleware
const authenticateApiKey = (request, response, next) => {
    const apiKey = request.headers["x-api-key"] || request.query.apiKey;

    if (!apiKey) {
        return response.status(401).json({
            error: 'API key is required',
            docs: 'https://your-api-docs.com/authentication'
        });
    }

    const keyData = apikeys.get(apiKey);
    if (!keyData) {
        return response.status(403).json({ error: 'Invalid API key' });
    }

    // Attach key data to request for use in route handlers
    request.apiKey = keyData;
    next();
};

// Protected route using API key
app.get("/api/data", authenticateApiKey, (request, response) => {
    response.json({
        message: 'Access granted',
        client: request.apiKey.name,
        timestamp: new Date().toISOString()
    });
});

// Route to generate a new API key (protected by admin auth in real apps)
app.post("/api/keys", (request, response) => {
    const { name, permissions } = request.body;
    const apiKey = generateApiKey();

    // Fixed typo: changed 'apikey' to 'apiKey' (FIX #2)
    apikeys.set(apiKey, { name, permissions });
    response.status(201).json({ apiKey });
});

// Helper function to generate API keys
function generateApiKey() {
    return [...Array(32)].map(() => Math.floor(Math.random() * 16).toString(16)).join("");
}

const PORT = process.env.PORT || 3000;
if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Server running at http://localhost:${PORT}`);
    });
}

// Export app so the test file can use it
module.exports = app;