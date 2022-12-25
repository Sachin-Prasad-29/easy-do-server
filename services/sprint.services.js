const { createHttpError } = require('../errors/custom.error')
const Sprint = require('../models/Sprint')

const createSprintSvc = async () => {
  return 'Hi From createSprintSvc'
}
const getAllSprintSvc = async () => {
  return 'Hi From getAllSprintSvc'
}
const getSprintByIdSvc = async () => {
  return 'Hi From getSprintByIdSvc'
}
const editSprintByIdSvc = async () => {
  return 'Hi From editSprintByIdSvc'
}
const deleteSprintByIdSvc = async () => {
  return 'Hi From deleteSprintByIdSvc'
}

module.exports = {
  createSprintSvc,
  getAllSprintSvc,
  getSprintByIdSvc,
  editSprintByIdSvc,
  deleteSprintByIdSvc
}
