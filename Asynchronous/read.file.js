//Basic File reading
const fs = require("fs").promises;

async function readFile(){
    try{
        const fileData = await fs.readFile("myfile.txt","utf8");
        console.log(fileData);
    }
    catch(error){
        console.error("Error reading file:",error);

    }
}
readFile()
