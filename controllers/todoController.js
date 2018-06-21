// The controller contains the routes. that is control the request and response flow
// require/immport all the dependencies including the model(todo)
const express = require("express");
const task = require("../models/todo.js");
const router = express.Router();
// Import handlebars helper module package
const hbs = require('handlebars');

// Create helper function to add one a value. To be use in displaying the list of task in task-block.hanldebars 
hbs.registerHelper('plusone', (val, opts) =>{
    return parseInt(val) + 1;
  });

// Create the routes
// get route/  Read
router.get("/", function (req, res) {
    task.all(function (data) {
        let hbsObject = {
            tasks: data
        };
        // console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

// Post route/ Create
router.post("/api/tasks", function (req, res) {
    task.create(["task", "complete"],
        [req.body.task, req.body.complete],
        function (result) {
            res.json({ id: result.insertId });
        }
    );
});

// Put Route /Update
router.put("/api/tasks/:id", function (req, res) {
    let condition = "id = " + req.params.id;
    // console.log("condition", condition);
    task.update({
        complete: req.body.complete
    }, condition, function (result) {
        if (result.changedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

// Delete route /delete
router.delete("/api/tasks/:id", function(req, res) {
    var condition = "id = " + req.params.id;
  
    task.delete(condition, function(result) {
      if (result.affectedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });
//   Export router to server.js
module.exports = router;