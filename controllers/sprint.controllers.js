const { createHttpError } = require('../errors/custom.error')

const {
  createSprintSvc,
  getAllSprintSvc,
  getSprintByIdSvc,
  editSprintByIdSvc,
  deleteSprintByIdSvc
} = require('../services/sprint.services')

const createSprint = async (req, res, next) => {
  const sprintReqData = req.body
  console.dir(sprintReqData)
  if (Object.keys(sprintReqData).length === 0) {
    const httpError = createHttpError('Body is missing', 400)
    next(httpError)
    return
  }
  try {
    const sprintData = await createSprintSvc(sprintReqData)
    res.status(201).json({ success: true, sprint: sprintData })
  } catch (error) {
    const httpError = createHttpError(error.message, 400)
    next(httpError)
  }
}
const getAllSprint = async (req, res, next) => {
  const projectId = req.params.projectId
  try {
    const allSprint = await getAllSprintSvc(projectId)
    res.status(201).json({ success: true, sprint: allSprint })
  } catch (error) {
    const httpError = createHttpError(error.message, 400)
    next(httpError)
  }
}
const getSprintById = async (req, res, next) => {
  const sprintId = req.params.sprintId
  try {
    const fetchedSprint = await getSprintByIdSvc(sprintId)
    res.status(201).json({ success: true, sprint: fetchedSprint })
  } catch (error) {
    const httpError = createHttpError(error.message, 400)
    next(httpError)
  }
}
const editSprintById = async (req, res, next) => {
  const sprintId = req.params.sprintId
  const sprintPayload = req.body
  try {
    const updatedSprint = await editSprintByIdSvc(sprintId, sprintPayload)
    res.status(201).json({ success: true, sprint: updatedSprint })
  } catch (error) {
    const httpError = createHttpError(error.message, 400)
    next(httpError)
  }
}
const deleteSprintById = async (req, res, next) => {
  const sprintId = req.params.sprintId
  try {
    const deletedSprint = await deleteSprintByIdSvc(sprintId)
    res.status(201).json({ success: true, sprint: deletedSprint })
  } catch (error) {
    const httpError = createHttpError(error.message, 400)
    next(httpError)
  }
}

module.exports = {
  createSprint,
  getAllSprint,
  getSprintById,
  editSprintById,
  deleteSprintById
}
