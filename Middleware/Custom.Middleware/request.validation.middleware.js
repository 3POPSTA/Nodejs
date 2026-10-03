import express from "express";

const app = express();
const port = 3000;

// CRITICAL: This tells Express to read incoming JSON data in request.body
app.use(express.json());

function validateUserCreation(request, response, next) {
    const { username, email, password } = request.body;

    if (!username || username.length < 3) {
        return response.status(400).json({
            error: "Username must be at least 3 characters",
        });
    }

    if (!email || !email.includes("@")) {
        return response.status(400).json({
            error: "Valid email is required",
        });
    }

    if (!password || password.length < 6) {
        // Fixed: changed 'res' to 'response'
        return response.status(400).json({
            error: "Password must be at least 6 characters"
        });
    }

    next(); // All checks passed, move on to the main route!
}

// Changed app.use to app.post because creating data is a POST action
app.post("/api/users", validateUserCreation, (request, response) => {
    response.status(201).json({
        message: "User created successfully"
    });
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});