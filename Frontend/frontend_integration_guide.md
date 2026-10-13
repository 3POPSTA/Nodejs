# Introduction to Frontend Integration with Node.js

Node.js provides a backend foundation that integrates with modern JavaScript frontend frameworks, enabling developers to build full-stack applications within just the JavaScript ecosystem.

This approach offers several advantages:
- **Unified Language:** Use JavaScript/TypeScript across the entire stack
- **Code Sharing:** Share validation, types, and utilities between frontend and backend
- **Developer Experience:** Consistent tooling and package management with npm/yarn
- **Performance:** Efficient data transfer with JSON and modern protocols
- **Ecosystem:** Access to a vast collection of packages for both frontend and backend

## Common Integration Patterns

### 1. API-First Architecture
Node.js backend exposes RESTful or GraphQL APIs consumed by a separate frontend application.

```javascript
// Example API endpoint
app.get('/api/products', (req, res) => {
  res.json([{ id: 1, name: 'Product' }]);
});
```

### 2. Server-Side Rendering (SSR)
Node.js renders initial page on the server for better SEO and performance.

```javascript
// Next.js page
export async function getServerSideProps() {
  const res = await fetch('https://api.example.com/data');
  return { props: { data: await res.json() } };
}
```

### 3. Micro-Frontends
Multiple frontend applications integrated into a unified experience.

```javascript
// Module Federation in webpack.config.js
new ModuleFederationPlugin({
  name: 'app1',
  filename: 'remoteEntry.js',
  exposes: { './Component': './src/Component' }
})