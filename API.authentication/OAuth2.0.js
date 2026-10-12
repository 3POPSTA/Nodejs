// Set up OAuth 2.0 with Google
const express = require("express");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const session = require("express-session");
const dotenv = require("dotenv");

dotenv.config();
const app = express();

// Configure sessions for OAuth 2.0
app.use(session({
    secret: 'your-secret-key', // Use process.env.SESSION_SECRET in production
    resave: false,
    saveUninitialized: false,
    cookie: { secure: process.env.NODE_ENV === 'production' }
}));

// Initialize Passport
app.use(passport.initialize());
app.use(passport.session());

// Configure Google OAuth 2.0 strategy
passport.use(new GoogleStrategy({
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: 'http://localhost:8080/auth/google/callback'
    },
    (accessToken, refreshToken, profile, done) => { // Fixed typo: acessToken -> accessToken
        const user = {
            id: profile.id,
            displayName: profile.displayName,
            email: profile.emails[0].value,
            provider: "google"
        };
        return done(null, user);
    }
));

// Serialize user for session
passport.serializeUser((user, done) => {
    done(null, user);
});

// Deserialize user from session
passport.deserializeUser((user, done) => {
    done(null, user);
});

// Simple Login page route (Fixes the 404 redirect error)
app.get("/login", (request, response) => {
    response.send('<h1>Login Page</h1><a href="/auth/google">Login with Google</a>');
});

// Routes for Google OAuth
app.get("/auth/google", passport.authenticate("google", { scope: ["profile", "email"] }));

app.get("/auth/google/callback", passport.authenticate("google", { failureRedirect: "/login" }),
    (request, response) => {
        // Successful authentication
        response.redirect("/profile");
    }
);

// Middleware to check authentication
const isAuthenticated = (request, response, next) => {
    if (request.isAuthenticated()) {
        return next();
    }
    response.redirect("/login");
};

// Protected route
app.get("/profile", isAuthenticated, (request, response) => {
    response.json({ user: request.user });
});

// Logout route (Fixed with modern Passport callback syntax)
app.get("/logout", (request, response, next) => {
    request.logout((err) => {
        if (err) { return next(err); }
        response.redirect("/");
    });
});

// Start server
const port = 8080;
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});