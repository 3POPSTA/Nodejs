const fs = require("fs").promises;

async function renameFile(){
    const oldPath = "old-name.txt";
    const newPath = "new-name.txt";

    try{
        await fs.access(oldPath);

        try{
            await fs.access(newPath);
            console.log("Destination file already exists");
            return;
        }
        catch(error){}

        await fs.rename(oldPath,newPath);
        console.log("File renamed successfully");
    }
    catch(error){
        if(error.code === "ENOENT"){
            console.log("source file do noe exist");
        }
        else{
            console.log('Error renaming file:', error);
        }

    }
}
renameFile();