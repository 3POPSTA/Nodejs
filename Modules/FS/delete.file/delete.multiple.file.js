const fs = require("fs").promises;
// const path = require("path");

async function deleteFiles(){
    const filesToDelete = [
        'temp1.txt',
        'temp2.txt',
        'temp3.txt'
    ]
    try{
        await Promise.all(filesToDelete.map(file => {
            fs.unlink(file).catch(error => {
                if(error.code !== "ENOENT") {
                    console.log(`Error deleting ${file}:`, error);
                }
            });
        }));
        console.log('Files deleted successfully');
    }
    catch(error){
        console.error('Error during file deletion:', error);
    }
}
deleteFiles();