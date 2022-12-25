const express = require('express')

const router = express.Router()
const { authenticate } = require('../middleware/auth')
const {
  createBacklog,
  getBacklogById,
  editBacklogById,
  deleteBacklogById
} = require('../controllers/backlog.controllers')

router.post('/', authenticate, createBacklog) // project id will be passed for linking in body
router.get('/:backlogId', authenticate, getBacklogById)
router.patch('/:backlogId', authenticate, editBacklogById)
router.delete('/:backlogId', authenticate, deleteBacklogById)

module.exports = router
