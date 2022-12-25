const { createHttpError } = require('../errors/custom.error')
const Issue = require('../models/Issue')

const createIssueSvc = async (issueData) => {
  try {
    const insertedIssue = await Issue.create(issueData)
    if (!insertedIssue) {
      const error = createHttpError('Bad Request', 400)
      throw error
    }
    return insertedIssue
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
  return
}
const getAllProjectIsssueSvc = async (projectId) => {
  try {
    const allProjectIssue = await Issue.find({ projectId })
    if (!allProjectIssue) {
      const error = createHttpError('No Issue Found for the Project', 400)
      throw error
    }
    return allProjectIssue
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
const getAllUserIsssueSvc = async (userEmail) => {
  try {
    const allUserIssue = await Issue.find({ 'assignee.email': userEmail })
    if (!allUserIssue) {
      const error = createHttpError('No Issue Found for the User', 400)
      throw error
    }
    return allUserIssue
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
const getIssueByIdSvc = async (issueId) => {
  try {
    const issueDetails = await Issue.findById(issueId)
    if (!issueDetails) {
      const error = createHttpError('No Issue Found with Given Id', 404)
      throw error
    }
    return issueDetails
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
const editIssueByIdSvc = async (issueId, issuePayload) => {
  try {
    const updatedIssue = await Issue.findByIdAndUpdate(issueId, issuePayload, {
      new: true,
      runValidators: true
    })
    if (!updatedIssue) {
      const error = createHttpError('No Issue Found with Given Id', 404)
      throw error
    }
    return updatedIssue
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
const deleteIssueByIdSvc = async (issueId) => {
  try {
    const deletedIssueDetails = await Issue.findByIdAndDelete(issueId)
    if (!deletedIssueDetails) {
      const error = createHttpError('No Issue Found with Given Id', 404)
      throw error
    }
    return deletedIssueDetails
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
  createIssueSvc,
  getAllProjectIsssueSvc,
  getAllUserIsssueSvc,
  getIssueByIdSvc,
  editIssueByIdSvc,
  deleteIssueByIdSvc
}
