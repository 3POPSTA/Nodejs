// Creating a Table

// const mysql = require("mysql2");

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

//     let sql = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";

//     connection.query(sql, function(error,result){
//         if (error) {
//             console.error("Connection failed: ", error.message);
//             return;
//         }
//         console.log("Table created!");
//     });
// });


// Primary Key
const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "localhost",
    user:"root",
    password: "1234567890",
    database: "mydb"
});


connection.connect(function(error){
    if (error) {
        console.error("Connection failed: ", error.message);
        return;
    }
    console.log("Connected!");

    let sql = "CREATE TABLE customers (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), address VARCHAR(255))";

    connection.query(sql, function(error,result){
        if (error) {
        console.error("Connection failed: ", error.message);
        return;
        }
        console.log("Table created");
    });
});