const mongoose = require('mongoose')

const ProfileSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        profilePic: {
            type: String,
            required: true,
        },
    },
    { _id: false }
)

module.exports = ProfileSchema
