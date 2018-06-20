// Import/Require the ORM module from config folder "orm.js the functions that will interact with the database"
const orm = require("../config/orm.js");

// Note the tasks is the name of the table in the todo database
const todo = {
    create: function (cols, vals, callback) {
        orm.create("tasks", cols, vals, function (res) {
            callback(res);
        });
    },
    all: function (callback) {
        orm.all("tasks", function (res) {
            callback(res);
        });
    },
    update: function (colVals, condition, callback) {
        orm.update("tasks", colVals, condition, function (res) {
            callback(res);
        });
    },
    delete: function (condition, callback) {
        orm.delete("tasks", condition, function (res) {
            callback(res);
        });
    }
};

// Export the database functions for the controller "exprots to todoController.js"

module.exports = todo;
