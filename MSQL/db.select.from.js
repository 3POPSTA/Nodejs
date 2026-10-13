// Selecting From a Table
// let mysql = require('mysql2');

// let connection = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "1234567890",
//     database: "mydb"
// });

// connection.connect(function(error){
//     if (error) {
//         console.error("Connection failed: ", error.message);
//         return;
//     }
//     console.log("Connected!");

//     // SELECT * will return all columns
//     let sql = "SELECT * FROM customers";

//     connection.query(sql,function(error,result,fields){
//         if (error) {
//             console.error("Connection failed: ", error.message);
//             return;
//         }
//         console.log(result);
//     });
// });

// Selecting Columns
let mysql = require('mysql2');

let connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1234567890",
    database: "mydb"
});

connection.connect(function(error){
    if (error) {
        console.error("Connection failed: ", error.message);
        return;
    }
    console.log("Connected!");

    // SELECT * will return all columns
    let sql = "SELECT name,address FROM customers";

    connection.query(sql,function(error,result,fields){
        if (error) {
            console.error("Connection failed: ", error.message);
            return;
        }

        // The Result Object
        // console.log(result);
        // console.log(result[2]);
        // console.log(result[2].name);
        // console.log(result[2].address);

        // The Fields Object
        console.log(fields);
        console.log(fields[1]);
        console.log(fields[1].name)

    });
});