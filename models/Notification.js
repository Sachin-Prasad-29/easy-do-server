const mongoose = require('mongoose')

const notificationSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.ObjectId,
            required: [true, 'Project ID must be Provided'],
        },
        message: {
            type: String,
            default: '',
        },
        mark: {
            type: String,
            enum: ['Read', 'Unread'],
        },
    },
    { timestamps: true }
)

module.exports = mongoose.model('Notification', notificationSchema)
