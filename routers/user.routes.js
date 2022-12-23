const express = require('express')

const router = express.Router()
const { authenticate } = require('../middleware/auth')
const { register, login, getProfile, editProfile } = require('../controllers/user.controllers')

router.post('/register', register)
router.post('/login', login)
router.get('/profile', authenticate, getProfile)
router.patch('/profile', authenticate, editProfile)

module.exports = router
