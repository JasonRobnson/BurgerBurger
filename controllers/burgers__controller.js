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

    burger.create( req.body.burger_name, (data) => {
       res.json(data.insertId);
    })
 });
routher.post("/api/devour",(req, res) =>{
    burger.update();
})



module.exports = router;