// const { error } = require("console");
const fs = require("fs");

const readableStream = fs.createReadStream("input.txt","utf8");
const writableStream = fs.createWriteStream("output.txt");

readableStream.pipe(writableStream);

writableStream.on("finish", ()=> {
    console.log("File copy completed");
});

readableStream.on("error",(error)=>{
    console.error('Error reading file:', error);
});

writableStream.on('error', (error) => {
  console.error('Error writing file:', error);
});