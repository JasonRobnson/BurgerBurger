let orm = require("../config/orm.js")


let burger = {
    all: (cb) => {
        orm.all("burgers", (res) => {
            cb(res);
        })
    }
}


module.exports = burger;