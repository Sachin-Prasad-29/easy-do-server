const mongoose = require('mongoose')

const ProjectSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        ProjectId: {
            type: mongoose.ObjectId,
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
        type: {
            type: String,
            required: true,
        },
        projectAdmin: {
            type: String,
            required: true,
        },
    },
    { _id: false }
)

module.exports = ProjectSchema
