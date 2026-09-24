//* Callback style
// const stream = require("stream");
// const fs = require('fs');
// const zlib = require('zlib');


// stream.pipeline(
//     fs.createReadStream("input.txt"), 
//     zlib.createGzip(),
//     fs.createWriteStream("destination.txt.gz"),
//     (error) => {
//         if (error) console.log('Pipeline failed:', error);
//         else { console.log("Pipeline succeeded")}
//     }
// );


//* Promise style (recommended)
// const stream = require("stream").promises;
const { pipeline } = require("stream/promises");
const fs = require("fs");
const zlib = require("zlib");

async function compress() {
    try{
        await pipeline(
            fs.createReadStream("input.txt"), // read
            zlib.createGzip(), // compress
            fs.createWriteStream("input.txt.gz") // write
        );
        console.log("compression successfully");
    }
    catch(error){
        console.log('Pipeline failed:', error);
    } 
}
compress()



