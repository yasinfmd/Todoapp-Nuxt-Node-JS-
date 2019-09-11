const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors');
const app = express();
const morgan = require("morgan")
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan("dev"))
let db = require("./db")
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const todosRouter = require("./routes/todos")

db.UserPassword.belongsTo(db.User)
db.User.hasMany(db.UserPassword)
db.Todos.belongsTo(db.User)
db.User.hasMany(db.Todos);
// view engine setup

db.sequelize.sync().then(() => {
    /*app.listen(PORT, () => {
        console.log("Server is Runnig With Port is" + PORT + " " + "Good Luck :)")
    })*/
    app.use('/', indexRouter);
    app.use('/api/users', usersRouter);
    app.use("/api/todos", todosRouter)
    app.use((req, res, next) => {
        const error = new Error("Not Found")
        error.status = 404;
        next(error);
    })
    app.use((error, req, res, next) => {
        res.status(error.status || 500)
        res.json({
            error: {
                msg: error.message
            }
        })
        error.status = 404;
        next(error);
    })
})





module.exports = app


// error handler