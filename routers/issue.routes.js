const express = require('express')

const router = express.Router()
const { authenticate } = require('../middleware/auth')
const {
  createIssue,
  getAllProjectIsssue,
  getAllUserIsssue,
  getIssueById,
  editIssueById,
  deleteIssueById
} = require('../controllers/issue.controllers')

router.post('/', authenticate, createIssue)
router.get('/:issueId', authenticate, getIssueById)
router.patch('/:issueId', authenticate, editIssueById)
router.delete('/:issueId', authenticate, deleteIssueById)
router.get('/user/:userEmail', authenticate, getAllUserIsssue)
router.get('/project/:projectId', authenticate, getAllProjectIsssue)

module.exports = router
