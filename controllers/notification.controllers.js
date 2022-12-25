const { createHttpError } = require('../errors/custom.error')

const {
    createNotificationSvc,
    getAllNotificationSvc,
    editNotificationByIdSvc,
    deleteNotificationByIdSvc,
} = require('../services/notification.services')

const createNotification = async (req, res, next) => {
    res.status(201).json({ success: 'hello from Notificatoin' })
}
const getAllNotification = async (req, res, next) => {
    res.status(201).json({ success: 'hello from Notificatoin' })
}
const editNotificationById = async (req, res, next) => {
    res.status(201).json({ success: 'hello from Notificatoin' })
}
const deleteNotificationById = async (req, res, next) => {
    res.status(201).json({ success: 'hello from Notificatoin' })
}

module.exports = {
    createNotification,
    getAllNotification,
    editNotificationById,
    deleteNotificationById,
}
