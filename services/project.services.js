const { createHttpError } = require('../errors/custom.error')
const Project = require('../models/Project')

const createProjectSvc = async (data) => {
    try {
        const addedProject = await Project.create(data)
        if (!addedProject) {
            const error = createHttpError(`Bad Request`, 400)
            throw error
        }
        return addedProject
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
const getProjectsSvc = async (userEmail) => {
    try {
        const allProjects = await Project.find({ contributors: userEmail })
        if (!allProjects) {
            const error = createHttpError(`No Project Found `, 400)
            throw error
        }
        return allProjects
    } catch (error) {
        throw error
    }
}
const getProjectByIdSvc = async (projectId) => {
    try {
        const prjectDetails = await Project.findById(projectId)
        if (!prjectDetails) {
            const error = createHttpError(`No Project Found with Given Id`, 404)
            throw error
        }
        return prjectDetails
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
const editProjectByIdSvc = async () => {}
const deleteProjectByIdSvc = async () => {}

module.exports = { createProjectSvc, getProjectsSvc, getProjectByIdSvc, editProjectByIdSvc, deleteProjectByIdSvc }
