const fs = require("fs").promises;

async function writeWithFileHandle(){
    let fileHandle;

    try{
        fileHandle = await fs.open("output.txt","w");

        await fileHandle.write("First Line\n");
        await fileHandle.write("Second Line\n");
        await fileHandle.write("Third Line\n");

        console.log("Content written sucessfully");
    }
    catch(error){
        console.error("Error writing to file:",error)
    }
    finally{
        if(fileHandle){
            await fileHandle.close();
        }
    }
}
 writeWithFileHandle();