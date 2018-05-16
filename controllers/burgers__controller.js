let express = require('express');
let router = express.Router();
let burger = require("../models/burger.js")

router.get("/", (req, res ) => {
    res.send("This is from the root route!")
    burger.all("burgers", (data) => {
        let HandbarsObj = {
        burger: data
        };
        console.log(HandBarsObj);
        res.render("index",handBarsObj);
    });
});



module.exports = router;