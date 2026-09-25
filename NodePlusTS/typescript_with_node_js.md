# Using TypeScript with Node.js

To use TypeScript in Node.js projects, you need to install TypeScript and type definitions:

```bash
npm install -g typescript
npm install --save-dev @types/node
```

Write your code in `.ts` files and compile them to JavaScript with:

```bash
tsc yourfile.ts
```

## Setting Up a TypeScript Project

1. **Initialize a new Node.js project**
   ```bash
   npm init -y
   ```

2. **Install TypeScript and type definitions**
   ```bash
   npm install --save-dev typescript @types/node
   ```

3. **Initialize TypeScript configuration**
   ```bash
   npx tsc --init