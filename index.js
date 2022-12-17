// This is the entry Point of the application
require('dotenv/config')
const { connectDB } = require('./db/connectDB')
const CONSTANTS_APP = require('./constants/app.contants')
const app = require('./init/app')

;(async () => {
    try {
        await connectDB(CONSTANTS_APP.DB)
        app.listen(CONSTANTS_APP.PORT, function () {
            console.log(`Server is Listening at http://localhost:${CONSTANTS_APP.PORT}`)
        })
    } catch (error) {
        console.error(`Failed to connect to Server`)
    }
})()
