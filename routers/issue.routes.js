const express = require('express')

const router = express.Router()
const { authenticate } = require('../middleware/auth')
const {
    createIssue,
    getAllProjectIsssue,
    getAllAssigneedIsssue,
    getAllReportedIssue,
    getIssueById,
    editIssueById,
    deleteIssueById,
} = require('../controllers/issue.controllers')

router.post('/', authenticate, createIssue)
router.get('/:issueId', authenticate, getIssueById)
router.patch('/:issueId', authenticate, editIssueById)
router.delete('/:issueId', authenticate, deleteIssueById)
router.get('/user/assigneed/:userEmail', authenticate, getAllAssigneedIsssue)  // assigneed issues to me
router.get('/project/:projectId', authenticate, getAllProjectIsssue)
router.get('/user/reported/:userEmail',authenticate,getAllReportedIssue) // reproted issue by me

module.exports = router
