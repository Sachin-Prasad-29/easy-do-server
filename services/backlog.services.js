const { createHttpError } = require('../errors/custom.error')
const Backlog = require('../models/Backlog')

const createBacklogSvc = async (backlogData) => {
  try {
    const insertedBacklog = await Backlog.create(backlogData)
    if (!insertedBacklog) {
      const error = createHttpError('Bad Request', 400)
      throw error
    }
    return insertedBacklog
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
const getBacklogByIdSvc = async (backlogId) => {
  try {
    const backlogDetails = await Backlog.findById(backlogId)
    if (!backlogDetails) {
      const error = createHttpError('No Backlog Found with Given Id', 404)
      throw error
    }
    return backlogDetails
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
const editBacklogByIdSvc = async (backlogId, backlogPayload) => {
  try {
    const updatedBacklog = await Backlog.findByIdAndUpdate(backlogId, backlogPayload, {
      new: true,
      runValidators: true
    })
    if (!updatedBacklog) {
      const error = createHttpError('No Backlog Found with Given Id', 404)
      throw error
    }
    return updatedBacklog
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
const deleteBacklogByIdSvc = async (backlogId) => {
  try {
    const deletedBacklog = await Backlog.findByIdAndDelete(backlogId)
    if (!deletedBacklog) {
      const error = createHttpError('No Backlog Found with Given Id', 404)
      throw error
    }
    return deletedBacklog
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
  createBacklogSvc,
  getBacklogByIdSvc,
  editBacklogByIdSvc,
  deleteBacklogByIdSvc
}
