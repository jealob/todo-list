// Seet up mysql connection
const mysql = require("mysql");
require('dotenv').config();

let connection = mysql.createConnection({
    host: process.env.DB_HOST,
    port:  process.env.DB_PORT,
    user:  process.env.DB_USER,
    password:  process.env.DB_PASSWORD,
    database:  "todo_db"
});

// Start Connection 
connection.connect(function(err) {
    if (err) {
        console.error("error connection: "  + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId)
});
//Exports to ORM
module.exports = connection;