const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const ProjectSchema = require('./schema/ProjectSchema')
const TechnologySchema = require('./schema/TechnologySchema')

const userSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: [true, 'Email must be Provided'],
            unique: true,
        },
        name: {
            type: String,
            required: [true, 'Name must be Provided'],
        },
        password: {
            type: String,
            required: true,
        },
        projects: {
            type: [ProjectSchema],
            default: [],
        },
        technologies: {
            type: [TechnologySchema],
            default: [],
        },
        phone: {
            type: String,
            default: '',
        },
        profilePic: {
            type: String,
            default: 'https://www.ssrl-uark.com/wp-content/uploads/2014/06/no-profile-image.png',
        },
        birthday: {
            type: Date,
            default: '',
        },
        location: {
            type: String,
            default: '',
        },
        website: {
            type: [String],
            default: [],
        },
        gender: {
            type: String,
            enum: ['Male', 'Female', 'Other'],
        },
    },
    { timestamps: true }
)

module.exports = mongoose.model('User', userSchema)