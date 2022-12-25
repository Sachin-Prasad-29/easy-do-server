const { createHttpError } = require('../errors/custom.error')

const {
  createSprintSvc,
  getAllSprintSvc,
  getSprintByIdSvc,
  editSprintByIdSvc,
  deleteSprintByIdSvc
} = require('../services/sprint.services')

const createSprint = async (req, res, next) => {
  const response = await createSprintSvc()
  res.status(201).json({ success: true, sprint: response })
}
const getAllSprint = async (req, res, next) => {
  const response = await getAllSprintSvc()
  res.status(201).json({ success: true, sprint: response })
}
const getSprintById = async (req, res, next) => {
  const response = await getSprintByIdSvc()
  res.status(201).json({ success: true, sprint: response })
}
const editSprintById = async (req, res, next) => {
  const response = await editSprintByIdSvc()
  res.status(201).json({ success: true, sprint: response })
}
const deleteSprintById = async (req, res, next) => {
  const response = await deleteSprintByIdSvc()
  res.status(201).json({ success: true, sprint: response })
}

module.exports = {
  createSprint,
  getAllSprint,
  getSprintById,
  editSprintById,
  deleteSprintById
}
