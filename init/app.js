const express = require('express')
const bodyParser = require('body-parser')
const { serverHealth } = require('../helpers/serverHealth')
const userRouter = require('../routers/user.routes')
const projectRouter = require('../routers/project.routes')
const issueRouter = require('../routers/issue.routes')
const sprintRouter = require('../routers/sprint.routes')
const backlogRouter = require('../routers/backlog.routes')
const notificationRouter = require('../routers/notification.routes')
const notFound = require('../middleware/not.found')
const errorHandlerMiddleware = require('../middleware/error.handler')
const cors = require('cors')

const app = express()
app.use(cors({ origin: '*' }))

app.use(bodyParser.json({ limit: '5mb' }))
app.use(
  bodyParser.urlencoded({
    extended: true,
    limit: '5mb'
  })
)

app.get('/', serverHealth)
app.use('/api/auth', userRouter)
app.use('/api/project', projectRouter)
app.use('/api/issue', issueRouter)
app.use('/api/sprint', sprintRouter)
app.use('/api/backlog', backlogRouter)
app.use('/api/notification', notificationRouter)

app.use(notFound)
app.use(errorHandlerMiddleware)

module.exports = app
