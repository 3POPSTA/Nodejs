const fs = require("fs").promises;

async function appendToFile(){
    try{
        const logEntry = `${new Date().toISOString()}: Application started\n`;
        await fs.appendFile("app.log",logEntry,"utf8");
        console.log('Log entry added');
    }
    catch(error){
        console.error('Error appending to file:', error);
    }
}

appendToFile();