const express = require('express')

const router = express.Router()
const { authenticate } = require('../middleware/auth')
const {
    createSprint,
    getAllSprint,
    getSprintById,
    editSprintById,
    deleteSprintById,
} = require('../controllers/sprint.controllers')

router.post('/', authenticate, createSprint)
router.get('/project/:projectId', authenticate, getAllSprint) 
router.get('/:sprintId', authenticate, getSprintById) 
router.patch('/:sprintId', authenticate, editSprintById)
router.delete('/:sprintId', authenticate, deleteSprintById )

module.exports = router
