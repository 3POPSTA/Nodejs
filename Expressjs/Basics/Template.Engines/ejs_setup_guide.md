# EJS Template Engine Setup Guide

To use EJS (Embedded JavaScript templating) in your Node.js project, you first need to install the package. 

## Installation

Run the following command in your terminal within your project directory:

```bash
npm install ejs
```

## Quick Start / Basic Usage

Once installed, you can configure your Express.js application to use EJS as the view engine. Here is a quick example of how to set it up:

```javascript
const express = require('express');
const app = express();

// Set EJS as the templating engine
app.set('view engine', 'ejs');

// Define a route
app.get('/', (req, res) => {
    // Renders views/index.ejs and passes a variable named 'title'
    res.render('index', { title: 'Welcome to EJS!' });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
```

## Creating Your First Template

1. Create a folder named `views` in your project root.
2. Inside the `views` folder, create a file named `index.ejs`.
3. Add some basic HTML with EJS tags:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title><%= title %></title>
</head>
<body>
    <h1><%= title %></h1>
    <p>This page was rendered dynamically using EJS!</p>
</body>
</html>
```

## Key EJS Tags
* `<%= %>`: Outputs the value into the template (escaped HTML).
* `<% %>`: Control flow, no output (e.g., `if` statements or `for` loops).
* `<%- %>`: Outputs unescaped HTML.