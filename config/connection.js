// Set up MySQL connection.
let mysql  = require("mysql");
// let Mysql = require("../keys.js")

// let mysqlLogon = new Mysql(keys.mysqlKeys)

let connection = mysql.createConnection({
  port: 3306,
  host: "localhost",
  user: "root",
  password: "",
  database: "cat_db"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;