// Select With a Filter
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

//     let sql = "SELECT * FROM customers WHERE address = 'Park Lane 38'";

//     connection.query(sql, function (error, result) {
//         if (error) {
//             console.error("Connection failed: ", error.message);
//             return;
//         }
//         console.log(result);
//     });
// });

// Wildcard Characters

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

//     let sql = "SELECT * FROM customers WHERE address LIKE 'S%'";

//     connection.query(sql, function (error, result) {
//         if (error) {
//             console.error("Connection failed: ", error.message);
//             return;
//         }
//         console.log(result);
//     });
// });

// Escaping Query Values
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

//     let adr = "Mountain 21";
//     let sql = "SELECT * FROM customers WHERE address =" + mysql.escape(adr);

//     connection.query(sql, function (error, result) {
//         if (error) {
//             console.error("Connection failed: ", error.message);
//             return;
//         }
//         console.log(result);
//     });
// });

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

    let adr = "Mountain 21";
    let sql = "SELECT * FROM customers WHERE address = ?";

    connection.query(sql, [adr],function (error, result) {
        if (error) {
            console.error("Connection failed: ", error.message);
            return;
        }
        console.log(result);
    });
});