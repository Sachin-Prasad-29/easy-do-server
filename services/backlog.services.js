const { createHttpError } = require('../errors/custom.error')
const Backlog = require('../models/Backlog')

const createBacklogSvc = async () => {
  return 'Hi from createBacklogSvc'
}
const getBacklogByIdSvc = async () => {
  return 'Hi from getBacklogByIdSvc'
}
const editBacklogByIdSvc = async () => {
  return 'Hi from editBacklogByIdSvc'
}
const deleteBacklogByIdSvc = async () => {
  return 'Hi from deleteBacklogByIdSvc'
}

module.exports = {
  createBacklogSvc,
  getBacklogByIdSvc,
  editBacklogByIdSvc,
  deleteBacklogByIdSvc
}
