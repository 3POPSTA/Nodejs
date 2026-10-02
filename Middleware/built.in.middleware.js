const express = require('express');
const app = express();


// express.json(): Parse JSON request bodies
// express.urlencoded(): Parse URL-encoded request bodies
// express.static(): Serve static files
// express.Router(): Create modular route handlers

// Parse JSON bodies
app.use(express.json());

// Parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

// Serve static files
app.use(express.static('public'));











