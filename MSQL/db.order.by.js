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

    let sql = "SELECT * FROM customers ORDER BY name";
    let sqlSortByDecendingOrder = "SELECT * FROM customers ORDER BY name DESC";

    connection.query(sqlSortByDecendingOrder,function(error,result){
        if (error) {
            console.error("Connection failed: ", error.message);
            return;
        }
        console.log(result);

    });
});