//* path.basename()
// Returns the last portion of a path
// const path = require("path");

// const filename = path.basename("/Users/user/Desktop/Nodejs/Modules/PATH/path.js");
// console.log(filename);


//* __dirname and __filename
// const path = require("path");

// console.log("Directory name: ", __dirname);
// console.log("File path: ", __filename);
// console.log("File name: ", path.basename(__filename));

// const configPath = path.join(__dirname,"config.json");
// console.log(configPath);

//* path.extname()
// Returns the extension of a path, from the last occurrence of the . character to the end of the string.
// const path = require("path");

// const extension = path.extname("file.txt");
// console.log(extension);


//* path.join()
// const path = require("path");

// const fullPath = path.join("/users","docs","file.txt");
// console.log(fullPath);


//* path.resolve()
// const path = require("path");

// console.log(path.resolve("file.txt"));
// console.log(path.resolve('/users', 'docs', 'file.txt'));


//* path.parse()
// const path = require("path");

// const pathInfo = path.parse(__filename);
// console.log(pathInfo);


//* path.format()
// const path = require("path");

// const myPath = {
//     root: 'C://',
//     dir: 'C://Users//user//Desktop//Nodejs//Modules//PATH',
//     base: 'path.js',
//     ext: '.js',
//     name: 'path'
// }

// console.log(path.format(myPath));


//* path.normalize()
const path = require("path");

console.log(path.normalize('/users/./docs/../data/file.txt'))