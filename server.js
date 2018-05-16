// let connection = require("./config/connection.js");
let express = require("express");
let bodyParser = require("body-parser");

let exprHandbars = require("express-handlebars")

let PORT = process.env.PORT || 8080;

let app = express();

//Provides static content from the "public" dir in app
app.use(express.static("public"));

//parses the application with form URL encoder
app.use(bodyParser.urlencoded({extended: true}));

app.use(bodyParser.json());

//lays out default view for handlebars 
app.engine("handlebars", exprHandbars({ defaultLayout: "main"}));
app.set("view engine", "handlebars");



app.listen(PORT, () => {
  console.log("Server listening on: http://localhost " + PORT)
});


