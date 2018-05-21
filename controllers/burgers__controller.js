let express = require('express');
let router = express.Router();
let burger = require("../models/burger.js")

router.get("/", (req, res ) => {
    burger.all("burgers", (data) => {
        let HandbarsObj = {
        burgers: data
        };
      
        res.render("index",HandbarsObj);
    });
});

router.post("/api/burgers", (req, res) => {
        console.log(req.body.burger_name)
})



module.exports = router;