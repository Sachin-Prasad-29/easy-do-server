const { createHttpError } = require('../errors/custom.error')

const {
    createBacklogSvc,
    getBacklogByIdSvc,
    editBacklogByIdSvc,
    deleteBacklogByIdSvc,
} = require('../services/backlog.services')

const createBacklog = async (req, res, next) => {
    res.status(201).json({ success: 'hello from backlog' })
}
const getBacklogById = async (req, res, next) => {
    res.status(201).json({ success: 'hello from backlog' })
}
const editBacklogById = async (req, res, next) => {
    res.status(201).json({ success: 'hello from backlog' })
}
const deleteBacklogById = async (req, res, next) => {
    res.status(201).json({ success: 'hello from backlog' })
}

module.exports = {
    createBacklog,
    getBacklogById,
    editBacklogById,
    deleteBacklogById,
}
