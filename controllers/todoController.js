// The controller contains the routes. that is control the request and response flow
// require/immport all the dependencies including the model(todo)
const express = require("express");
const todo = require("../models/todo.js");
const router = express.Router();

// Create the routes
// get route
router.get("/", function (req, res) {
    todo.all(function (data) {
        let hbsObject = {
            tasks: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

module.exports = router;