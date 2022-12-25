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
    res.status(201).json({ success: 'hello from ISSUE' })
}
const getAllProjectIsssue = async (req, res, next) => {
    res.status(201).json({ success: 'hello from ISSUE' })
}
const getAllUserIsssue = async (req, res, next) => {
    res.status(201).json({ success: 'hello from ISSUE' })
}
const getIssueById = async (req, res, next) => {
    res.status(201).json({ success: 'hello from ISSUE' })
}
const editIssueById = async (req, res, next) => {
    res.status(201).json({ success: 'hello from ISSUE' })
}
const deleteIssueById = async (req, res, next) => {
    res.status(201).json({ success: 'hello from ISSUE' })
}

module.exports = {
    createIssue,
    getAllProjectIsssue,
    getAllUserIsssue,
    getIssueById,
    editIssueById,
    deleteIssueById,
}
