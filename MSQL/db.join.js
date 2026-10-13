let mysql = require('mysql2');

let connection = mysql.createConnection({
    host: "localhost",
    user: "yourusername",
    password: "yourpassword",
    database: "mydb"
});

connection.connect(function(error){
    if (error) {
        console.error("Connection failed: ", error.message);
        return;
    }
    console.log("Connected!");
    
    let sql = "SELECT users.name AS user, products.name AS favorite FROM users JOIN products ON users.favorite_product = products.id";
    
    connection.query(sql,function(error,result){
        if (error) {
            console.error("Connection failed: ", error.message);
            return;
        }
        console.log(result);

    });
});