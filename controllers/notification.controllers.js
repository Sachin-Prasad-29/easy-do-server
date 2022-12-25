const { createHttpError } = require('../errors/custom.error')

const {
    createNotificationSvc,
    getAllNotificationSvc,
    editNotificationByIdSvc,
    deleteNotificationByIdSvc,
} = require('../services/notification.services')

const createNotification = async (req, res, next) => {
    const response = await createNotificationSvc()
    res.status(201).json({ success: true, notification: response })
}
const getAllNotification = async (req, res, next) => {
    const response = await getAllNotificationSvc()
    res.status(201).json({ success: true, notification: response })
}
const editNotificationById = async (req, res, next) => {
    const response = await editNotificationByIdSvc()
    res.status(201).json({ success: true, notification: response })
}
const deleteNotificationById = async (req, res, next) => {
    const response = await deleteNotificationByIdSvc()
    res.status(201).json({ success: true, notification: response })
}

module.exports = {
    createNotification,
    getAllNotification,
    editNotificationById,
    deleteNotificationById,
}
