const fs = require("fs").promises;

async function deleteFile(){
    const filePath = "delete.txt";

    try{
        await fs.access(filePath);
        await fs.unlink(filePath);

        console.log("File Deleted Sucessfully");
    }
    catch(error){
        if(error.code === "ENOENT") console.log("File does not exist");
        else{ console.error('Error deleting file:', err); }
    }
}
deleteFile();