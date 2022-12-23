const { createHttpError } = require('../errors/custom.error')
const User = require('../models/User')

const checkUser = async (email) => {
    try {
        const user = await User.findOne({ email })
        if (user) return true
        return false
    } catch (error) {
        if (error.name === 'ValidationError') {
            const dbError = new Error(`Validation error : ${error.message}`)
            dbError.type = 'ValidationError'
            throw dbError
        }
        if (error.name === 'CastError') {
            const dbError = new Error(`Data type error : ${error.message}`)
            dbError.type = 'CastError'
            throw dbError
        }
        throw error
    }
}

const registerSvc = async (userData) => {
    let registeredUserData
    try {
        registeredUserData = await User.create(userData)
    } catch (error) {
        if (error.name === 'ValidationError') {
            const dbError = new Error(`Validation error : ${error.message}`)
            dbError.type = 'ValidationError'
            throw dbError
        }

        if (error.name === 'CastError') {
            const dbError = new Error(`Data type error : ${error.message}`)
            dbError.type = 'CastError'
            throw dbError
        }

        throw error
    }
    if (!registeredUserData) {
        const error = createHttpError('Bad Credentials', 400)
        throw error
    }
    return registeredUserData
}

const getUserByEmail = async (email) => {
    const loginedInUserData = await User.findOne({ email })
    if (!loginedInUserData) {
        const httpError = createHttpError('User Not Found with the Email', 400)
        throw httpError
    }
    return loginedInUserData
}
const checkPassword = async (user, plainPassword) => {
    let isMatch

    try {
        isMatch = await user.checkPassword(plainPassword)
    } catch (error) {
        const httpError = createHttpError('Something went wrong checking credentials')
        error.type = 'DBError'
        throw httpError
    }
    if (!isMatch) {
        const httpError = new Error('Bad Credentials')
        error.type = 'BadCredentials'
        throw httpError
    }
    return isMatch
}
const getProfileSvc = async (id) => {
    let userDetails
    try {
        userDetails = await User.findById(id)
    } catch (error) {
        throw error
    }
    if (userDetails === null) {
        const error = createHttpError(`No user found with id: ${id}`, 400)
        throw error
    }
    return userDetails
}

const editProfileSvc = async (id, userData) => {
    let editedUserDetails
    try {
        editedUserDetails = await User.findByIdAndUpdate(id, userData, {
            new: true,
            runValidators: true,
        })
    } catch (error) {
        throw error
    }
    if (!editedUserDetails) {
        const error = createHttpError(`No user found with id: ${id}`, 400)
        throw error
    }
    return editedUserDetails
}

module.exports = {
    checkUser,
    registerSvc,
    getUserByEmail,
    checkPassword,
    getProfileSvc,
    editProfileSvc,
}
