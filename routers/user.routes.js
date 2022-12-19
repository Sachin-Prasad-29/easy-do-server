const express = require('express')

const router = express.Router()

const {register,login,getProfile,editProfile} = require('../controllers/user.controllers')

router.post('/register',register)
router.post('/login',login)
router.get('/profile',getProfile)
router.patch('/profile',editProfile)


module.exports = router