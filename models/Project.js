const mongoose = require('mongoose')
const IssueSchema = require('./schema/IssueSchema')
const IssueTypeSchema = require('./schema/IssueTypeSchema')
const ProfileSchema = require('./schema/ProfileSchema')

const projectSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Name must be Provided'],
        },

        key: {
            type: String,
            required: [true, 'Key must be Provided'],
        },
        logo: {
            type: String,
            default: 'https://freedesignfile.com/upload/2017/08/rocket-icon-vector.png',
        },
        description: {
            type: String,
            default: '',
        },
        link: {
            type: String,
            default: '',
        },
        issueTypes: {
            type: [IssueTypeSchema],
            default: [
                {
                    name: 'Epic',
                    logo: 'https://cdn1.iconfinder.com/data/icons/medieval-7/128/medieval_medieval_gem_crystal_diamond_purple_treasure-256.png',
                },
                {
                    name: 'Story',
                    logo: 'https://cdn1.iconfinder.com/data/icons/multimedia-and-interface-flat-style-1/32/Multimedia_Tag_save_label_library_ecommerce_interface-256.png',
                },
                {
                    name: 'Task',
                    logo: 'https://cdn0.iconfinder.com/data/icons/round-ui-icons/512/tick_blue.png',
                },
                {
                    name: 'Bugs',
                    logo: 'https://cdn1.iconfinder.com/data/icons/animals-2/96/ladybug-256.png',
                },
            ],
        },
        contributors: {
            type: [String],
            required: true,
        },
        issues: {
            type: [IssueSchema],
            default: [],
        },
        workflow: {
            type: [String],
            default: ['TODO', 'PROGRESS', 'DONE'],
        },
        createdBy: {
            type: ProfileSchema,
            required: true,
        },
        type: {
            type: 'String',
            required: true,
            enum: ['Waterfall', 'Scrum', 'Kanban'],
        },
        status: {
            type: String,
            default: 'Ongoing',
        },
    },
    { timestamps: true }
)

module.exports = mongoose.model('Project', projectSchema)
