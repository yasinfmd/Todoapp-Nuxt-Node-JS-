var db = require("../db")

exports.todo_get_all =
    function(req, res, next) {
        db.Todos.findAll({
            where: {
                todocomplated: req.params.status == 1 ? true : false
            },
            include: [{
                model: db.User
            }]
        }).then((result) => {
            if (result.length > 0) {
                res.status(200).json(result)
            } else {
                res.status(204).json([])
            }

        }).catch((error) => {
            res.status(500).json({
                msg: error
            })
        })

    }