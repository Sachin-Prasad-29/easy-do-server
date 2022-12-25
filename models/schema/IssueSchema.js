const mongoose = require('mongoose')

const IssueSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        id: {
            type: mongoose.ObjectId,
            required: true,
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
