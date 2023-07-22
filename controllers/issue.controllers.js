const { createHttpError } = require('../errors/custom.error')

const {
    createIssueSvc,
    getAllProjectIsssueSvc,
    getAllAssigneedIsssueSvc,
    getAllReportedIssueSvc,
    getIssueByIdSvc,
    editIssueByIdSvc,
    deleteIssueByIdSvc,
} = require('../services/issue.services')

const createIssue = async (req, res, next) => {
  const issueReqData = req.body

  if (Object.keys(issueReqData).length === 0) {
    const httpError = createHttpError('Body is missing', 400)
    next(httpError)
    return
  }
  const { email, name, profilePic } = res.locals.userData
  const userData = { email, name, profilePic }
  issueReqData.reporter = userData
  try {
    const insertedIssue = await createIssueSvc(issueReqData)
    res.status(201).json({ success: true, issue: insertedIssue })
  } catch (error) {
    const httpError = createHttpError(error.message, 400)
    next(httpError)
  }
}

const getAllProjectIsssue = async (req, res, next) => {
  const projectId = req.params.projectId

  try {
    const allProjectIssue = await getAllProjectIsssueSvc(projectId)
    res.status(201).json({ success: true, issue: allProjectIssue })
  } catch (error) {
    const httpError = createHttpError(error.message, 400)
    next(httpError)
  }
}

const getAllAssigneedIsssue = async (req, res, next) => {
    const userEmail = req.params.userEmail

    try {
        const allUserIssue = await getAllAssigneedIsssueSvc(userEmail)
        res.status(201).json({ success: true, issue: allUserIssue })
    } catch (error) {
        const httpError = createHttpError(error.message, 400)
        next(httpError)
    }
}
const getAllReportedIssue = async (req, res, next) => {
    const userEmail = req.params.userEmail

    try {
        const allUserIssue = await getAllReportedIssueSvc(userEmail)
        res.status(201).json({ success: true, issue: allUserIssue })
    } catch (error) {
        const httpError = createHttpError(error.message, 400)
        next(httpError)
    }
}

const getIssueById = async (req, res, next) => {
  const issueId = req.params.issueId
  try {
    const fetchedIssue = await getIssueByIdSvc(issueId)
    res.status(201).json({ success: true, issue: fetchedIssue })
  } catch (error) {
    const httpError = createHttpError(error.message, 400)
    next(httpError)
  }
}

const editIssueById = async (req, res, next) => {
  const issueId = req.params.issueId
  const issuePayload = req.body
  try {
    const updatedIssue = await editIssueByIdSvc(issueId, issuePayload)
    res.status(201).json({ success: true, issue: updatedIssue })
  } catch (error) {
    const httpError = createHttpError(error.message, 400)
    next(httpError)
  }
}

const deleteIssueById = async (req, res, next) => {
  const issueId = req.params.issueId
  try {
    const deletedIssue = await deleteIssueByIdSvc(issueId)
    res.status(201).json({ success: true, issue: deletedIssue })
  } catch (error) {
    const httpError = createHttpError(error.message, 400)
    next(httpError)
  }
}

module.exports = {
    createIssue,
    getAllProjectIsssue,
    getAllAssigneedIsssue,
    getAllReportedIssue,
    getIssueById,
    editIssueById,
    deleteIssueById,
}
