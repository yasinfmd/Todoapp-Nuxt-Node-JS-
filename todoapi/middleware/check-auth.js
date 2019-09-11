const jwt = require("jsonwebtoken")

module.exports = function(req, res, next) {
    try {
        const token = req.headers.authorization.split(" ")[1]
        const decoded = jwt.verify(token, "secret")
        req.userData = decoded
        next();
    } catch (err) {
        // console.log(err)
        return res.status(401).json({
            message: "Auth Failed"
        })
    }
}