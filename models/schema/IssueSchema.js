const mongoose = require('mongoose')

const IssueSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            require: true,
        },
        id: {
            type: mongoose.ObjectId,
            require: true,
        },
        status: {
            type: String,
            default: 'todo',
        },
        assignedTo: {
            type: String,
            default: '',
        },
    },
    { _id: false }
)

module.exports = IssueSchema
