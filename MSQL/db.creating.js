const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1234567890"
});

connection.connect(function(error){
    if (error) {
        console.error("Connection failed: ", error.message);
        return;
    }
    console.log("Connected!");

    connection.query("CREATE DATABASE mydb", function(error,result){
        if (error) {
            console.error("Connection failed: ", error.message);
            return;
        }
        console.log("Database created");
    });
});