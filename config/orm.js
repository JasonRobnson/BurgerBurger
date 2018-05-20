let connection = require("./connection.js");

let orm = {
    all: (searchQuery, cb) => {
        let queryString = "SELECT * FROM "+ searchQuery + ";"
        connection.query(queryString, (err,result) => {
             if(err) {
                throw err;
             }
             console.log(result);
             cb(result)
        })
    },
      
        create: (tableName, burgerName, cb) => {
            let queryString = `INSERT INTO ${tableName} VALUES (burger_name, devoured) VALUES ("${burgerName}", False);`
            console.log(queryString)
        }
        // connection.query(queryString, (err, result) => {
        //     if(err) {
        //         throw err;
        //     }
        //     console.log(result);
        //     cb(result)
        // })
      };

    
    




module.exports = orm;

console.log("This is from the ORM module");