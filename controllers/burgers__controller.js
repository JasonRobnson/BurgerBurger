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
router.post("/api/devour",(req, res) =>{
   console.log(req.body.burgerType + "This from Update burgerController")
    burger.update(req.body.burgerType);
    res.redirect("/")
})



module.exports = router;