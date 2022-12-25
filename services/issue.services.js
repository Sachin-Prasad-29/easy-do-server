const { createHttpError } = require('../errors/custom.error')
const Issue = require('../models/Issue')

const createIssueSvc = async () => {
    return 'Hi from createIssueSvc'
}
const getAllProjectIsssueSvc = async () => {
    return 'Hi from getAllProjectIsssueSvc'
}
const getAllUserIsssueSvc = async () => {
    return 'Hi from getAllUserIsssueSvc'
}
const getIssueByIdSvc = async () => {
    return 'Hi from getIssueByIdSvc'
}
const editIssueByIdSvc = async () => {
    return 'Hi from editIssueByIdSvc'
}
const deleteIssueByIdSvc = async () => {
    return 'Hi from deleteIssueByIdSvc'
}

module.exports = {
    createIssueSvc,
    getAllProjectIsssueSvc,
    getAllUserIsssueSvc,
    getIssueByIdSvc,
    editIssueByIdSvc,
    deleteIssueByIdSvc,
}
