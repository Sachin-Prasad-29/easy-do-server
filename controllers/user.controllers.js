const { createHttpError } = require('../errors/custom.error')
// const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const CONSTANTS_APP = require('../constants/app.contants')

const {
  checkUser,
  registerSvc,
  getUserByEmail,
  checkPassword,
  getProfileSvc,
  editProfileSvc
} = require('../services/user.services')

const register = async (req, res, next) => {
  const userReqData = req.body

  if (Object.keys(userReqData).length === 0) {
    const httpError = createHttpError('Body is missing', 400)
    next(httpError)
    return
  }
  try {
    if (await checkUser(userReqData.email)) {
      return res.status(400).send({ success: false, msg: 'User Already Registered' })
    }
    const user = await registerSvc(userReqData)
    const userDetails = { ...user.toObject() }
    delete userDetails.password

    userDetails.success = true

    res.status(201).json(userDetails)
  } catch (error) {
    const httpError = createHttpError(error.message, 400)

    next(httpError)
  }
}
const login = async (req, res, next) => {
  const userReqData = req.body
  if (!(userReqData?.email && userReqData?.password)) {
    const httpError = createHttpError('Bad Request Email or Password Missing', 400)
    next(httpError)
    return
  }

  const { email, password } = userReqData
  try {
    const user = await getUserByEmail(email)

    await checkPassword(user, password)

    const payload = {
      id: user._id,
      name: user.name,
      email: user.email,
      profilePic: user.profilePic
    }
    jwt.sign(payload, CONSTANTS_APP.JWT_SECRET, function (error, token) {
      // some problem in generating JWT
      if (error) {
        const httpError = createHttpError('Internal Server Error', 500)
        next(httpError)
      }
      const userDetails = {
        name: user.name,
        email: user.email,
        token,
        success: true
      }
      res.status(201).json(userDetails)
    })
  } catch (error) {
    if (error.type === 'BadCredentials') {
      const httpError = createHttpError('Bad Credentials | Email or Password is Incorrect', 403)
      next(httpError)
    } else {
      const httpError = createHttpError('Internal Server Error', 500)
      next(httpError)
    }
  }
}

const getProfile = async (req, res, next) => {
  const userId = res.locals.userData.id
  try {
    const user = await getProfileSvc(userId)

    const userDetails = { ...user.toObject() }
    delete userDetails.password

    userDetails.success = true
    res.status(201).json(userDetails)
  } catch (error) {
    const httpError = createHttpError(error.message, 400)
    next(httpError)
  }
}
const editProfile = async (req, res, next) => {
  const reqData = req.body
  const userId = res.locals.userData.id
  try {
    const user = await editProfileSvc(userId, reqData)
    const userDetails = { ...user.toObject() }
    delete userDetails.password
    userDetails.success = true

    res.status(201).json(userDetails)
  } catch (error) {
    const httpError = createHttpError(error.message, 400)
    next(httpError)
  }
}

module.exports = {
  register,
  login,
  getProfile,
  editProfile
}
