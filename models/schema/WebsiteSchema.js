const mongoose = require('mongoose')

const WebsiteSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        logo: {
            type: String,
            required: true,
        },
        link: {
            type: String,
            default: '',
        },
    },
    { _id: false }
)

module.exports = WebsiteSchema
