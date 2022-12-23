const express = require('express')
const bodyParser = require('body-parser')
const { serverHealth } = require('../helpers/serverHealth')
const userApiRouter = require('../routers/user.routes');
const notFound = require('../middleware/not.found');
const errorHandlerMiddleware = require('../middleware/error.handler');

const app = express()

app.use(bodyParser.json({ limit: '5mb' }))
app.use(
    bodyParser.urlencoded({
        extended: true,
        limit: '5mb',
    })
)

app.get('/', serverHealth)
app.use('/api/auth', userApiRouter)

app.use(notFound)
app.use(errorHandlerMiddleware)

module.exports = app
