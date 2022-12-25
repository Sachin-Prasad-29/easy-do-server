const express = require('express')

const router = express.Router()
const { authenticate } = require('../middleware/auth')
const {
    createProject,
    getProjects,
    getProjectById,
    editProjectById,
    deleteProjectById,
} = require('../controllers/project.controllers')

router.post('/', authenticate, createProject)
router.get('/', authenticate, getProjects)
router.get('/:id', authenticate, getProjectById)
router.patch('/:id', authenticate, editProjectById)
router.delete('/:id', authenticate, deleteProjectById)

module.exports = router
