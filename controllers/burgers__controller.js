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

router.post("/api/burgers", (req, res) => {
    console.log(req.body)
    // burger.create([
    //    console.log(req.body.newBurger)
    // ], (result) => {
    //     console.log("Ring Ring!")
    // })
    // console.log("API ")
    // res.send("This is the api/burger ROUTE");
   
})



module.exports = router;