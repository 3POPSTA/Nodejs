//Insert single record

// const mysql = require("mysql2");

// const connection = mysql.createConnection({
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

//     let sql = "INSERT INTO customers (name,address) VALUES ('Company Inc','Highway 37')";

//     connection.query(sql,function(error,result){
//         if (error) {
//             console.error("Connection failed: ", error.message);
//             return;
//         }
//         console.log("1 record inserted");
//     });
// });


// Insert Multiple Records
let mysql = require('mysql2');

let connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1234567890",
  database: "mydb"
});

connection.connect(function(error) {
    if (error) {
        console.error("Connection failed: ", error.message);
        return;
    }
    console.log("Connected!");

    let sql = "INSERT INTO customers (name, address) VALUES ?";
    let values = [
        ['John', 'Highway 71'],
        ['Peter', 'Lowstreet 4'],
        ['Amy', 'Apple st 652'],
        ['Hannah', 'Mountain 21'],
        ['Michael', 'Valley 345'],
        ['Sandy', 'Ocean blvd 2'],
        ['Betty', 'Green Grass 1'],
        ['Richard', 'Sky st 331'],
        ['Susan', 'One way 98'],
        ['Vicky', 'Yellow Garden 2'],
        ['Ben', 'Park Lane 38'],
        ['William', 'Central st 954'],
        ['Chuck', 'Main Road 989'],
        ['Viola', 'Sideway 1633']
    ];
    connection.query(sql, [values], function (error, result) {
        if (error) {
            console.error("Connection failed: ", error.message);
            return;
        }

        console.log("Number of records inserted: " + result.affectedRows);
    });
});

// The Result Object
// {
//   fieldCount: 0,
//   affectedRows: 14,
//   insertId: 0,
//   serverStatus: 2,
//   warningCount: 0,
//   message: '\'Records:14  Duplicated: 0  Warnings: 0',
//   protocol41: true,
//   changedRows: 0
// }

// Get Inserted ID

// let mysql = require('mysql2');

// let connection = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "1234567890",
//     database: "mydb"
// });

// connection.connect(function(error) {
//     if (error) {
//         console.error("Connection failed: ", error.message);
//         return;
//     }
//     console.log("Connected!");

//     let sql = "INSERT INTO customers (name, address) VALUES ('Michelle', 'Blue Village 1')";
//     connection.query(sql, function (error, result) {
//         if (error) {
//             console.error("Connection failed: ", error.message);
//             return;
//         }
//         console.log("1 record inserted, ID: " + result.insertId);
//     });
// });