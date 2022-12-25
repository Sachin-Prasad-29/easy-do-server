const mongoose = require('mongoose')

const WebsiteSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            require: true,
        },
        logo: {
            type: String,
            require: true,
        },
        link: {
            type: String,
            default: '',
        },
    },
    { _id: false }
)

module.exports = WebsiteSchema
