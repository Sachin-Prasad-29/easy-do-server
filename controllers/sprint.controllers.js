const { createHttpError } = require('../errors/custom.error')

const {
    createSprintSvc,
    getAllSprintSvc,
    getSprintByIdSvc,
    editSprintByIdSvc,
    deleteSprintByIdSvc,
} = require('../services/sprint.services')

const createSprint = async (req, res, next) => {
    res.status(201).json({ success: 'hello from Sprint' })
}
const getAllSprint = async (req, res, next) => {
    res.status(201).json({ success: 'hello from Sprint' })
}
const getSprintById = async (req, res, next) => {
    res.status(201).json({ success: 'hello from Sprint' })
}
const editSprintById = async (req, res, next) => {
    res.status(201).json({ success: 'hello from Sprint' })
}
const deleteSprintById = async (req, res, next) => {
    res.status(201).json({ success: 'hello from Sprint' })
}

module.exports = {
    createSprint,
    getAllSprint,
    getSprintById,
    editSprintById,
    deleteSprintById,
}
