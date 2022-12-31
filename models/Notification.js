const mongoose = require('mongoose')

const notificationSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.ObjectId,
            required: [true, 'User ID must be Provided'],
        },
        message: {
            type: String,
            required: true,
        },
        mark: {
            type: String,
            enum: ['READ', 'UNREAD'],
            default: 'UNREAD',
        },
    },
    { timestamps: true }
)

module.exports = mongoose.model('Notification', notificationSchema)
