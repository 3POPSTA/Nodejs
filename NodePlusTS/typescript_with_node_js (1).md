# Using TypeScript with Node.js

To use TypeScript in Node.js projects, you need to install TypeScript and type definitions locally:

```bash
npm init -y
npm install --save-dev typescript @types/node
npx tsc --init
```

Write your code in `.ts` files and compile them to JavaScript with:

```bash
npx tsc
```

## TypeScript Configuration (`tsconfig.json`)

```json
{
  "compilerOptions": {
    "target": "es2018",
    "module": "commonjs",
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules"]
}
```

### Key Compiler Options:
* **target**: Specify ECMAScript target version
* **module**: Specify module code generation
* **strict**: Enable all strict type checking options
* **outDir**: Redirect output structure to the directory
* **rootDir**: Specify the root directory of input files

---

## Why Use TypeScript with Node.js?

### Benefits of TypeScript:
* **Type Safety**: Catch errors at compile time rather than runtime
* **Better IDE Support**: Superior autocompletion and code navigation
* **Self-Documenting Code**: Types serve as documentation
* **Easier Refactoring**: Safely rename variables and update code
* **Gradual Adoption**: Add types incrementally to existing JavaScript code

### When to Use TypeScript:
* Large codebases with multiple developers
* APIs where type safety is critical
* Projects that will be maintained long-term
* When working with complex data structures