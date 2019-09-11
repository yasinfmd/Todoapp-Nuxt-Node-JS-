var db = require("../db")
const md5 = require("md5")
const jwt = require("jsonwebtoken")
const jtwKey = "secret"
var _ = require("underscore")

exports.sign_in =
    function(req, res, next) {
        let data = _.pick(req.body, "username", "userpass")
        db.User.findOne({
            where: {
                username: data.username
            }
        }).then(user => {
            if (user != null) {
                db.UserPassword.findOne({
                    where: {
                        userUserid: user.userid
                    }
                }).then(pass => {
                    if (pass != null) {
                        if (pass.userpass === md5(data.userpass)) {
                            const token = jwt.sign({
                                email: data.username,
                                userid: user.userid
                            }, jtwKey, {
                                expiresIn: "1h"
                            })
                            return res.status(200).json({
                                msg: "Auth Success",
                                token: token
                            })
                        } else {
                            res.status(401)
                            res.json({
                                error: "Auth Failed"
                            })
                        }
                    } else {
                        res.status(404)
                        res.json({
                            error: "Not Found"
                        })
                    }
                })
            } else {
                res.status(404)
                res.json({
                    error: "Not Found"
                })
            }
        }).catch(err => {
            res.status(500)
            res.json({
                error: err
            })
        })
    }