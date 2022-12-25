const mongoose = require('mongoose')
const IssueSchema = require('./schema/IssueSchema')

const sprintSchema = new mongoose.Schema(
    {
        projectId: {
            type: mongoose.ObjectId,
            required: [true, 'Project ID must be Provided'],
        },
        name: {
            type: String,
            required: [true, 'Sprint Name must be Provided'],
        },
        goal: {
            type: String,
            default: '',
        },
        status: {
            type: String,
            enum: ['NOT STARTED', 'ONGOING', 'COMPLETED'],
            default: 'NOT STARTED',
        },
        startDate: {
            type: Date,
            default: null,
        },
        endDate: {
            type: Date,
            default: null,
        },
        issues: {
            type: [IssueSchema],
            default: [],
        },
    },
    { timestamps: true }
)

module.exports = mongoose.model('Sprint', sprintSchema)
