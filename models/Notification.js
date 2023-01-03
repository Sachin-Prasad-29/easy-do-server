const mongoose = require('mongoose')

const notificationSchema = new mongoose.Schema(
  {
    email: {
      type: 'String',
      required: [true, 'Email ID must be Provided']
    },
    message: {
      type: String,
      required: true
    },
    mark: {
      type: String,
      enum: ['READ', 'UNREAD'],
      default: 'UNREAD'
    }
  },
  { timestamps: true }
)

module.exports = mongoose.model('Notification', notificationSchema)
