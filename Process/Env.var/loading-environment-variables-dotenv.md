# Loading Environment Variables from `.env` File

Environment variables let you store configuration values and secrets outside your source code.

For Node.js applications, the `dotenv` package can load variables from a `.env` file into `process.env`.

## 1. Install the `dotenv` Package

Run:

```bash
npm install dotenv
```

## 2. Create a `.env` File

Create a `.env` file in the root directory of your project:

```env
DATABASE_URL=your_database_url
```

You can store other configuration values here as well:

```env
PORT=5000
DATABASE_URL=your_database_url
API_KEY=your_api_key
```

## 3. Load Environment Variables

In your Node.js application, load `dotenv`:

```javascript
require('dotenv').config();
```

This reads the variables from the `.env` file and makes them available through `process.env`.

## 4. Access Environment Variables

You can now access the variables using `process.env`:

```javascript
console.log('Database URL:', process.env.DATABASE_URL);
```

For example:

```javascript
require('dotenv').config();

console.log('Database URL:', process.env.DATABASE_URL);
console.log('Port:', process.env.PORT);
console.log('API Key:', process.env.API_KEY);
```

## 5. Important Security Rule

**Never commit your `.env` file to Git.**

Add `.env` to your `.gitignore` file:

```gitignore
.env
```

This prevents sensitive values such as passwords, API keys, database credentials, and secret tokens from being uploaded to GitHub.

## Quick Reference

| Task | Code |
|---|---|
| Install dotenv | `npm install dotenv` |
| Load `.env` | `require('dotenv').config()` |
| Access a variable | `process.env.VARIABLE_NAME` |
| Ignore `.env` | Add `.env` to `.gitignore` |
