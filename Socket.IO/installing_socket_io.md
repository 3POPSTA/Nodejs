# Installing Socket.IO

## Server-Side Installation

Install Socket.IO in your Node.js project using npm or yarn:

```bash
# Using npm
npm install socket.io

# Or using Yarn
yarn add socket.io
```

---

## Client-Side Setup

Choose one of the following methods to include the client library:

### Option 1: CDN (Quick Start)
```html
<script src="https://cdn.socket.io/4.5.0/socket.io.min.js"></script>
```

### Option 2: NPM (Recommended for Production)
```bash
# Install the client library
npm install socket.io-client

# Or using Yarn
yarn add socket.io-client
```

### Option 3: Using ES6 Modules
```javascript
import { io } from 'socket.io-client';
```

---

## Version Compatibility

| Socket.IO Version | Node.js Version | Browser Support |
| :--- | :--- | :--- |
| **v4.x** | v12.22.0+ | Chrome 49+, Firefox 53+, Safari 10+ |
| **v3.x** | v10.0.0+ | Chrome 49+, Firefox 53+, Safari 10+ |
| **v2.x** | v6.0.0+ | Chrome 5+, Firefox 6+, Safari 5.1+ |

> **Note:** For production, it's recommended to use the same version on both client and server.