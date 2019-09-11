var Sequelize = require("sequelize")
var sequelize = new Sequelize("todoapi", "root", "", {
    host: "localhost",
    dialect: "mysql"
});
var db = {}
db.Todos = sequelize.import(__dirname + "/models/Todos.js")
db.User = sequelize.import(__dirname + "/models/User.js")
db.UserPassword = sequelize.import(__dirname + "/models/UserPassword.js")
db.sequelize = sequelize;
db.Sequelize = Sequelize;
module.exports = db;