const express = require('express')

const router = express.Router()
const { authenticate } = require('../middleware/auth')
const {
    createNotification,
    getAllNotification,
    editNotificationById,
    deleteNotificationById,
} = require('../controllers/notification.controllers')

router.post('/', authenticate, createNotification)
router.get('/', authenticate, getAllNotification)
router.patch('/:notificationId', authenticate, editNotificationById)
router.delete('/:notificationId', authenticate, deleteNotificationById)

module.exports = router
