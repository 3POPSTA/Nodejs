/**
 * The pipe() method connects a readable stream to a writable stream, 
 * automatically managing the flow of data and handling backpressure.
 */

const fs = require("fs");

const readableStream = fs.createReadStream("input");
const writableStream = fs.createWriteStream('destination.txt');

readableStream.pipe(writableStream);

readableStream.on("error",(error) => {
    console.log('Read error:', error);
})

writableStream.on('error', (error) => {
  console.error('Write error:', error);
});

writableStream.on('finish', () => {
  console.log('File copy completed!');
});