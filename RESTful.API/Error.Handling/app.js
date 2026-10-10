const express = require("express");
const app = express();
const port = 3000;
const userRoutes = require("./routes/users");
const { AppError } = require("./utils/errorHandler");
const { errorHandler } = require("./middleware/errorMiddleware");

app.use(express.json());

// Routes
app.use("/api/users", userRoutes);

// Handle any unmatched routes (404)
app.all("*", (request, response, next) => {
    next(new AppError(404, `Can't find ${request.originalUrl} on this server!`));
});

// Centralized error handling middleware (must be last)
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});