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

    let sql = "DELETE FROM customers WHERE address = 'Mountain 21'";

    connection.query(sql, function(error,result){
        if (error) {
            console.error("Connection failed: ", error.message);
            return;
        }
        console.log("Number of records deleted: " + result.affectedRows);
    });
});