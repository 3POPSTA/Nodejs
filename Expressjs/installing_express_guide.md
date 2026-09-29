# Installing Express

Express is a fast, unopinionated, minimalist web framework for Node.js. It provides a robust set of features for building web and mobile applications.

## Prerequisites
Before installing Express, ensure you have the following installed on your system:
- **Node.js**: (Includes npm, the Node package manager). You can verify your installation by running `node -v` and `npm -v` in your terminal.

---

## Basic Installation

To use Express in your Node.js application, you first need to initialize a Node project (if you haven't already) by running:
```bash
npm init -y
```

Once your project is initialized, you can install Express locally into your project directory using:
```bash
npm install express
```

---

## Saving to Dependencies

To install Express and automatically save it to your `package.json` file under `dependencies`, use the save flag:
```bash
npm install express --save
```
*(Note: Starting with npm version 5.0.0 and later, `--save` is now the default behavior when running `npm install <package>`, so simply running `npm install express` achieves the same result!)*

### Verifying the Installation
After installation, you can check that Express has been successfully added by opening your project's `package.json` file and looking under the `"dependencies"` section, or by running:
```bash
npm list --depth=0