const fs = require("fs");

const writableStream = fs.createWriteStream("input.txt");

writableStream.write("Hello");
writableStream.write("World!");
writableStream.write("World!");

writableStream.end();

writableStream.on('finish', () => {
  console.log('All data has been written to the file.');
});

writableStream.on('error', (error) => {
  console.error('Error writing to stream:', error);
});