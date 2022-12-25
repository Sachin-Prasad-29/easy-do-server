const mongoose = require('mongoose')
const IssueSchema = require('./schema/IssueSchema')
const IssueTypeSchema = require('./schema/IssueTypeSchema')
const ProfileSchema = require('./schema/ProfileSchema')
const CommentSchema = require('./schema/CommentSchema')

const issueSchema = new mongoose.Schema(
    {
        projectId: {
            type: mongoose.ObjectId,
            required: true,
        },
        summary: {
            type: String,
            required: [true, 'Name must be Provided'],
        },
        tag: {
            type: String,
            required: [true, 'Tag Must be provided'],
        },
        type: {
            type: IssueTypeSchema,
            required: [true, 'Issue type must be Provided'],
        },
        description: {
            type: String,
            default: '',
        },
        assignee: {
            type: ProfileSchema,
            default: null,
        },
        status: {
            type: String,
            default: 'TODO',
        },
        startDate: {
            type: Date,
            default: null,
        },
        endDate: {
            type: Date,
            default: null,
        },
        priority: {
            type: String,
            enum: ['LOW', 'MEDIUM', 'HIGH', 'VERY HIGH'],
        },
        reporter: {
            type: String,
            required: true,
        },
        attachment: {
            type: [String],
            default: null,
        },
        parentIssue: {
            type: IssueSchema,
            default: null,
        },
        childIssue: {
            type: [IssueSchema],
            default: null,
        },
        comments: {
            type: [CommentSchema],
            default: [],
        },
    },
    { timestamps: true }
)

module.exports = mongoose.model('Issue', issueSchema)
