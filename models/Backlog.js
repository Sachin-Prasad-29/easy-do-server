const mongoose = require('mongoose')
const IssueSchema = require('./schema/IssueSchema')

const backlogSchema = new mongoose.Schema(
    {
        projectId: {
            type: mongoose.ObjectId,
            required: [true, 'Project ID must be Provided'],
        },
        issues: {
            type: [IssueSchema],
            default: [],
        },
    },
    { timestamps: true }
)

module.exports = mongoose.model('Backlog', backlogSchema)
