//* Reading a file with callbacks
// import fs from "fs";

// fs.readFile("myfile.txt","utf8",(error,data)=>{
//     if(error){
//         console.log('Error reading file:', error);
//         return;
//     }
//     console.log('File content:', data);
// });

// fs.readFile("wallpaper.png",(error,data)=>{
//     if(error) throw error;
//     console.log('Image size:', data.length, 'bytes')
// })



//* Reading Files with Promises (Modern Approach)
// const fs = require("fs").promises;  

// async function readFileExample(){
//     try{
//         const data = await fs.readFile("file1.txt","utf8");
//         console.log(data);
//     }
//     catch(error){
//         console.log('Error reading file:', error);
//     }
// }
// readFileExample();

//* Reading file with util.promisify
// const {promisify} = require("util");
// const fs = require("fs");

// const readFileAsync = promisify(fs.readFile);

// async function readWithPromisfy(){
//     try{
//         const data = await readFileAsync("myfile.txt","utf8");
//         console.log(data);
//     }
//     catch(error){
//         console.log(error);
//     }
// }
// readWithPromisfy()

//* Reading Files Synchronously

const fs = require("fs");

try{
    const data = fs.readFileSync("file1.txt","utf8");
    console.log(data);
}
catch(error){
    console.log('Error reading file:', error);
}