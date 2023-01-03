const { createHttpError } = require('../errors/custom.error')
const Sprint = require('../models/Sprint')

const createSprintSvc = async (sprintData) => {
  try {
    const insertedSprint = await Sprint.create(sprintData)
    if (!insertedSprint) {
      const error = createHttpError('Bad Request', 400)
      throw error
    }
    return insertedSprint
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
const getAllSprintSvc = async (projectId) => {
  try {
    const allSprint = await Sprint.find({ projectId })
    if (!allSprint) {
      const error = createHttpError('No Sprint Found for the Project', 400)
      throw error
    }
    return allSprint
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
const getSprintByIdSvc = async (sprintId) => {
  try {
    const sprintDetails = await Sprint.findById(sprintId)
    if (!sprintDetails) {
      const error = createHttpError('No Sprint Found with Given Id', 404)
      throw error
    }
    return sprintDetails
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
const editSprintByIdSvc = async (sprintId, sprintPayload) => {
  try {
    const updatedSprint = await Sprint.findByIdAndUpdate(sprintId, sprintPayload, {
      new: true,
      runValidators: true
    })
    if (!updatedSprint) {
      const error = createHttpError('No Sprint Found with Given Id', 404)
      throw error
    }
    return updatedSprint
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
const deleteSprintByIdSvc = async (sprintId) => {
  try {
    const deletedSprint = await Sprint.findByIdAndDelete(sprintId)
    if (!deletedSprint) {
      const error = createHttpError('No Sprint Found with Given Id', 404)
      throw error
    }
    return deletedSprint
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
  createSprintSvc,
  getAllSprintSvc,
  getSprintByIdSvc,
  editSprintByIdSvc,
  deleteSprintByIdSvc
}
