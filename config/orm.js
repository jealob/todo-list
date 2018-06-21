// orm.js is used to setup Object relational mapper
// that is to setup query to the database 

// import sql connection from connection.js in config folder
const connection = require("./connection.js");

// Helper function to convert object key/value pairs to SQL syntax
function objToSql(ob) {
    var arr = [];

    // loop through the keys and push the key/value as a string int arr
    for (var key in ob) {
        var value = ob[key];
        // check to skip hidden properties
        if (Object.hasOwnProperty.call(ob, key)) {
            // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
            // e.g. {sleepy: true} => ["sleepy=true"]
            arr.push(key + "=" + value);
        }
    }

    // translate array of strings to a single comma-separated string
    return arr.toString();
}

// Object for all sql query functions
// This include create, update, get-all, delete task 
const orm = {
    create: function (table, cols, vals, callback) {
        let query = `INSERT INTO ${table} (${cols.toString()}) VALUES (?,?)`;
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
    update: function (table, objColVals, condition, callback) {
        let query = `UPDATE ${table} SET ${objToSql(objColVals)} WHERE ${condition}`;
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