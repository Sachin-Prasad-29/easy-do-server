const mongoose = require('mongoose')

const ProjectSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            require: true,
        },
        ProjectId: {
            type: mongoose.ObjectId,
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
        type: {
            type: String,
            require: true,
        },
        projectAdmin: {
            type: String,
            require: true,
        },
    },
    { _id: false }
)

module.exports = ProjectSchema
