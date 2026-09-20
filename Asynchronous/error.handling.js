//System Error
const fs = require("fs");
fs.readFile("non.txt",(err,data)=>{
    console.error(err.code);  // ENOENT
});

const http = require("http");
const req = http.get("http://nonexistent-site.com",(res)=>{});
req.on("error", (err)=>{
    console.error(err.code);
})


//Error-First Callback
const fs = require('fs');

function readConfigFile(filename, callback) {
  fs.readFile(filename, 'utf8', (err, data) => {
    if (err) {
      // Handle specific error types
      if (err.code === 'ENOENT') {
        return callback(new Error(`Config file ${filename} not found`));
      } else if (err.code === 'EACCES') {
        return callback(new Error(`No permission to read ${filename}`));
      }
      // For all other errors
      return callback(err);
    }

    // Process data if no error
    try {
      const config = JSON.parse(data);
      callback(null, config);
    } catch (parseError) {
      callback(new Error(`Invalid JSON in ${filename}`));
    }
  });
}

// Usage
readConfigFile('config.json', (err, config) => {
  if (err) {
    console.error('Failed to read config:', err.message);
    // Handle the error (e.g., use default config)
    return;
  }
  console.log('Config loaded successfully:', config);
});