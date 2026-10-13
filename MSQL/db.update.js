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

    let sql = "UPDATE customers SET address = 'Canyon 123' WHERE address = 'Valley 345'";

    connection.query(sql,function (error, result) {
        if (error) {
            console.error("Connection failed: ", error.message);
            return;
        }
        console.log(result.affectedRows + " record(s) updated");
    });
});