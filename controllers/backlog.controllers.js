const { createHttpError } = require('../errors/custom.error')

const {
    createBacklogSvc,
    getBacklogByIdSvc,
    editBacklogByIdSvc,
    deleteBacklogByIdSvc,
} = require('../services/backlog.services')

const createBacklog = async (req, res, next) => {
    const response = await createBacklogSvc()
    res.status(201).json({ success: true, backlog: response })
}
const getBacklogById = async (req, res, next) => {
    const response = await getBacklogByIdSvc()
    res.status(201).json({ success: true, backlog: response })
}
const editBacklogById = async (req, res, next) => {
    const response = await editBacklogByIdSvc()
    res.status(201).json({ success: true, backlog: response })
}
const deleteBacklogById = async (req, res, next) => {
    const response = await deleteBacklogByIdSvc()
    res.status(201).json({ success: true, backlog: response })
}

module.exports = {
    createBacklog,
    getBacklogById,
    editBacklogById,
    deleteBacklogById,
}
