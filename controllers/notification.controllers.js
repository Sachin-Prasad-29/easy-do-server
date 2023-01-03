const { createHttpError } = require('../errors/custom.error')

const {
    createNotificationSvc,
    getAllNotificationSvc,
    editNotificationByIdSvc,
    deleteNotificationByIdSvc,
} = require('../services/notification.services')

const createNotification = async (req, res, next) => {
    const notificationData = req.body

    if (Object.keys(notificationData).length === 0) {
        const httpError = createHttpError('Body is missing', 400)
        next(httpError)
        return
    }

    try {
        const insertedNotification = await createNotificationSvc(notificationData)
        res.status(201).json({ success: true, notification: insertedNotification })
    } catch (error) {
        const httpError = createHttpError(error.message, 400)
        next(httpError)
    }
}
const getAllNotification = async (req, res, next) => {
    const userEmail = res.locals.userData.email

    try {
        const allNotification = await getAllNotificationSvc(userEmail)
        res.status(201).json({ success: true, notification: allNotification })
    } catch (error) {
        const httpError = createHttpError(error.message, 400)
        next(httpError)
    }
}
const editNotificationById = async (req, res, next) => {
    const notificationId = req.params.notificationId
    const notificationPayload = req.body
    try {
        const updatedNotification = await editNotificationByIdSvc(notificationId, notificationPayload)
        res.status(201).json({ success: true, notification: updatedNotification })
    } catch (error) {
        const httpError = createHttpError(error.message, 400)
        next(httpError)
    }
}
const deleteNotificationById = async (req, res, next) => {
    const notificationId = req.params.notificationId
    try {
        const deletedNotificaiton = await deleteNotificationByIdSvc(notificationId)
        res.status(201).json({ success: true, notification: deletedNotificaiton })
    } catch (error) {
        const httpError = createHttpError(error.message, 400)
        next(httpError)
    }
}

module.exports = {
    createNotification,
    getAllNotification,
    editNotificationById,
    deleteNotificationById,
}
