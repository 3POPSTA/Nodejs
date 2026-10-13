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

//     let sql = "SELECT * FROM customers LIMIT 5";

//     connection.query(sql,function(error,result){
//         if (error) {
//             console.error("Connection failed: ", error.message);
//             return;
//         }
//         console.log(result);

//     });
// });

// Start From Another Position

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

    let sql = "SELECT * FROM customers LIMIT 5 OFFSET 2";
    // let sql = "SELECT * FROM customers LIMIT 2, 5";  // Shorter Syntax

    connection.query(sql,function(error,result){
        if (error) {
            console.error("Connection failed: ", error.message);
            return;
        }
        console.log(result);

    });
});