# Getting Started: Installing Modern Dependencies

To build a production-ready GraphQL API in Node.js today, we bypass legacy middleware like `express-graphql` (which has been deprecated) and use **Apollo Server** alongside Express and ES Modules.

### Step 2: Install Required Packages

Install the necessary dependencies by running the following command in your terminal:

```bash
npm install @apollo/server graphql cors express
```

### Package Overview

This command installs the following modern packages:

* **`@apollo/server`**: The industry-standard, high-performance, and production-ready GraphQL server for Node.js.
* **`express`**: The core web framework for routing and middleware handling in Node.js.
* **`cors`**: Middleware to enable secure Cross-Origin Resource Sharing for your API endpoints.
* **`graphql`**: The JavaScript reference implementation that parses and validates your schemas and queries.

> **Tip:** Ensure your `package.json` includes `"type": "module"` so you can take advantage of modern `import`/`export` syntax throughout your project.