const { createHttpError } = require('../errors/custom.error')

const {
  createBacklogSvc,
  getBacklogByIdSvc,
  editBacklogByIdSvc,
  deleteBacklogByIdSvc
} = require('../services/backlog.services')

const createBacklog = async (req, res, next) => {
  const backlogReqData = req.body

  if (Object.keys(backlogReqData).length === 0) {
    const httpError = createHttpError('Body is missing', 400)
    next(httpError)
    return
  }
  try {
    const insertedBacklog = await createBacklogSvc(backlogReqData)
    res.status(201).json({ success: true, backlog: insertedBacklog })
  } catch (error) {
    const httpError = createHttpError(error.message, 400)
    next(httpError)
  }
}
const getBacklogById = async (req, res, next) => {
  const backlogId = req.params.backlogId
  try {
    const fetchedBacklog = await getBacklogByIdSvc(backlogId)
    res.status(201).json({ success: true, backlog: fetchedBacklog })
  } catch (error) {
    const httpError = createHttpError(error.message, 400)
    next(httpError)
  }
}
const editBacklogById = async (req, res, next) => {
  const backlogId = req.params.backlogId
  const backlogPayload = req.body
  try {
    const updatedBacklog = await editBacklogByIdSvc(backlogId, backlogPayload)
    res.status(201).json({ success: true, backlog: updatedBacklog })
  } catch (error) {
    const httpError = createHttpError(error.message, 400)
    next(httpError)
  }
}
const deleteBacklogById = async (req, res, next) => {
  const backlogId = req.params.backlogId
  try {
    const deletedBacklog = await deleteBacklogByIdSvc(backlogId)
    res.status(201).json({ success: true, backlog: deletedBacklog })
  } catch (error) {
    const httpError = createHttpError(error.message, 400)
    next(httpError)
  }
}

module.exports = {
  createBacklog,
  getBacklogById,
  editBacklogById,
  deleteBacklogById
}
