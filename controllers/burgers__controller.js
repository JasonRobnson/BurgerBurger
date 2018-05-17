let express = require('express');
let router = express.Router();
let burger = require("../models/burger.js")

router.get("/", (req, res ) => {
    // res.send("This is from the Root route!")
    console.log("foobar")
    burger.all("burgers", (data) => {
        let HandbarsObj = {
        burgers: data
        };
        console.log(HandbarsObj);
        console.log("!!!!!!")
        res.render("index",HandbarsObj);
    });
});



module.exports = router;