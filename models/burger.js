let orm = require("../config/orm.js")


let burger = {
    all: (searchQuery, cb) => {
        orm.all(searchQuery, (res) => {
            cb(res);
        })
    }
}


module.exports = burger;