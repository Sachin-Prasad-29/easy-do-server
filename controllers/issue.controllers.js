const { createHttpError } = require('../errors/custom.error')

const {
    createIssueSvc,
    getAllProjectIsssueSvc,
    getAllUserIsssueSvc,
    getIssueByIdSvc,
    editIssueByIdSvc,
    deleteIssueByIdSvc,
} = require('../services/issue.services')

const createIssue = async (req, res, next) => {
    const response = await createIssueSvc()
    res.status(201).json({ success: true, issue: response })
}
const getAllProjectIsssue = async (req, res, next) => {
    const response = await getAllProjectIsssueSvc()
    res.status(201).json({ success: true, issue: response })
}
const getAllUserIsssue = async (req, res, next) => {
    const response = await getAllUserIsssueSvc()
    res.status(201).json({ success: true, issue: response })
}
const getIssueById = async (req, res, next) => {
    const response = await getIssueByIdSvc()
    res.status(201).json({ success: true, issue: response })
}
const editIssueById = async (req, res, next) => {
    const response = await editIssueByIdSvc()
    res.status(201).json({ success: true, issue: response })
}
const deleteIssueById = async (req, res, next) => {
    const response = await deleteIssueByIdSvc()
    res.status(201).json({ success: true, issue: response })
}

module.exports = {
    createIssue,
    getAllProjectIsssue,
    getAllUserIsssue,
    getIssueById,
    editIssueById,
    deleteIssueById,
}
