//* Using fs.writeFile()
//Creates a new file or overwrites an existing file with the specified content
// const fs = require("fs").promises;

// async function writeFileExample(){
//     try{
//         const data = { name: 'John', age: 30, city: 'New York' };
//         await fs.writeFile("myfile.txt","write myfile","utf8");
//         await fs.writeFile("data.json",JSON.stringify(data, null, 2), 'utf8');
//     }
//     catch(error){
//         console.log('Error writing files:', error);
//     }
// }
// writeFileExample();