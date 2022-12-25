const { createHttpError } = require('../errors/custom.error')
const Notificatoin = require('../models/Notification')

const createNotificationSvc = async () => {
  return 'Hi from createNotificationSvc'
}
const getAllNotificationSvc = async () => {
  return 'Hi from getAllNotificationSvc'
}
const editNotificationByIdSvc = async () => {
  return 'Hi from editNotificationByIdSvc'
}
const deleteNotificationByIdSvc = async () => {
  return 'Hi from deleteNotificationByIdSvc'
}

module.exports = {
  createNotificationSvc,
  getAllNotificationSvc,
  editNotificationByIdSvc,
  deleteNotificationByIdSvc
}
