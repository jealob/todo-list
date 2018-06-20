// orm.js is used to setup Object relational map
// that is to setup query to the database 

// import sql connection from connection.js in config folder
const connection = require("./connection.js");

// Object for all sql query functions
// This include create, update, get-all, delete task 
const orm = {
    create: function (table, cols, vals, callback) {
        let query = `INSERT INTO ${table} (${cols.toString} VALUES ?.?)`;
        connection.query(query, vals, function (err, result) {
            if (err) {
                throw err;
            }
            callback(result);
        });
    },
    all: function (table, callback) {
        let query = `SELECT * FROM ${table};`;
        connection.query(query, function (err, result) {
            if (err) {
                throw err;
            }
            callback(result);
        });
    },
    update: function () {
        let query = `SELECT * FROM ${table};`;
        connection.query(query, function (err, result) {
            if (err) {
                throw err;
            }
            callback(result);
        });
    },
    delete: function (table, condition, callback) {
        let query = `DELETE FROM ${table} WHERE ${condition}`;
        connection.query(query, function (err, result) {
            if (err) {
                throw err;
            }
            callback(result);
        });
    }
}

// Export orm module required in model/todo.js
module.exports = orm;