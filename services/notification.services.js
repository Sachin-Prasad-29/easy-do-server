const { createHttpError } = require('../errors/custom.error')
const Notification = require('../models/Notification')

const createNotificationSvc = async (notificationData) => {
    try {
        const insertedNotification = await Notification.create(notificationData)
        if (!insertedNotification) {
            const error = createHttpError('Bad Request', 400)
            throw error
        }
        return insertedNotification
    } catch (error) {
        if ((error.name = 'ValidationError')) {
            const dbError = new Error(`Validation error : ${error.message}`)
            dbError.type = 'ValidationError'
            throw dbError
        }
        if (error.name === 'CastError') {
            const dbError = new Error(`Data Type Error : ${error.message}`)
            dbError.type = 'CastError'
            throw dbError
        }
        throw error
    }
}
const getAllNotificationSvc = async (userEmail) => {
    try {
        const allNotification = await Notification.find({ email: userEmail })
        if (!allNotification) {
            const error = createHttpError('No Notification Found for the User', 400)
            throw error
        }
        return allNotification
    } catch (error) {
        if (error.name === 'CastError') {
            const dbError = new Error(`Data Type error : ${error.message}`)
            dbError.type = 'CastError'
            throw dbError
        }
        if (error.type === 'NotFound') {
            throw error
        }
        throw error
    }
}
const editNotificationByIdSvc = async (notificationId, notificationPayload) => {
    try {
        const updatedNotification = await Notification.findByIdAndUpdate(notificationId, notificationPayload, {
            new: true,
            runValidators: true,
        })
        if (!updatedNotification) {
            const error = createHttpError('No Notification Found with Given Id', 404)
            throw error
        }
        return updatedNotification
    } catch (error) {
        if (error.name === 'CastError') {
            const dbError = new Error(`Data Type error : ${error.message}`)
            dbError.type = 'CastError'
            throw dbError
        }
        if (error.type === 'NotFound') {
            throw error
        }
        throw error
    }
}
const deleteNotificationByIdSvc = async (notificationId) => {
    try {
        const deletedNotificaiton = await Notification.findByIdAndDelete(notificationId)
        if (!deletedNotificaiton) {
            const error = createHttpError('No Notification Found with Given Id', 404)
            throw error
        }
        return deletedNotificaiton
    } catch (error) {
        if (error.name === 'CastError') {
            const dbError = new Error(`Data Type error : ${error.message}`)
            dbError.type = 'CastError'
            throw dbError
        }
        if (error.type === 'NotFound') {
            throw error
        }
        throw error
    }
}

module.exports = {
    createNotificationSvc,
    getAllNotificationSvc,
    editNotificationByIdSvc,
    deleteNotificationByIdSvc,
}
