# Process Managers

For production environments, use a process manager to keep your application running smoothly.

**PM2** is one of the most popular choices for Node.js applications.

## 1. Install PM2 Globally

```bash
npm install -g pm2
```

## 2. Basic PM2 Commands

### Start an application

```bash
pm2 start app.js
```

### List all running applications

```bash
pm2 list
```

### Monitor resources

```bash
pm2 monit
```

### View application logs

```bash
pm2 logs
```

### Stop an application

```bash
pm2 stop app_name
```

### Restart an application

```bash
pm2 restart app_name
```

### Delete an application from PM2

```bash
pm2 delete app_name
```

## 3. PM2 Configuration

Create an ecosystem file for advanced configuration:

### `ecosystem.config.js`

```javascript
module.exports = {
  apps: [
    {
      name: 'my-app',
      script: 'app.js',
      instances: 'max',
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',

      env: {
        NODE_ENV: 'development'
      },

      env_production: {
        NODE_ENV: 'production'
      }
    }
  ]
};
```

## 4. Useful PM2 Features

PM2 provides many other features, including:

- **Process management** — keeps your Node.js application running.
- **Automatic restarts** — restarts the application if it crashes.
- **Load balancing** — can run multiple instances of an application.
- **Monitoring** — lets you monitor CPU and memory usage.
- **Log management** — provides commands for viewing application logs.
- **Memory limits** — can restart an application when it exceeds a specified memory limit.
- **Environment management** — supports different environment configurations such as development and production.

## Quick Reference

| Command | Purpose |
|---|---|
| `pm2 start app.js` | Start an application |
| `pm2 list` | List running applications |
| `pm2 monit` | Monitor applications |
| `pm2 logs` | View logs |
| `pm2 stop app_name` | Stop an application |
| `pm2 restart app_name` | Restart an application |
| `pm2 delete app_name` | Remove an application from PM2 |
