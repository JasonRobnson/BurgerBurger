let orm = require("../config/orm.js")


let burger = {
    all: (searchQuery, cb) => {
        orm.all(searchQuery, (res) => {
            cb(res);
        })
    },
    create: (burgerName, cb) => {
        orm.create("burgers", burgerName, (res) => {
            cb(res);
        })    
     },
    update: (toggleEaten, cb) => {
        orm.update("burgers", toggleEaten, (res) => {
            cb(res);
        })
     }
    
    
};


module.exports = burger;