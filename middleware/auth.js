const jwt = require('jsonwebtoken')
const CONSTANTS_APP = require('../constants/app.contants')

const authenticate = (req, res, next) => {
    const token = req.header('Authorization')

    jwt.verify(token, CONSTANTS_APP.JWT_SECRET, function (err, userData) {
        if (err) {
            const error = new Error('You are not authorized to access this Application')
            error.status = 401
            next(error)
            return
        }

        res.locals.userData = userData

        next()
    })
}

module.exports = { authenticate }
