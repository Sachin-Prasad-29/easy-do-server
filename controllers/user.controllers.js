const register = (req, res, next) => {
    res.status(200).json({ msg: 'Hi From Register Controller' })
}
const login = (req, res, next) => {
    res.status(200).json({ msg: 'Hi From Login Controller' })
}
const getProfile = (req, res, next) => {
    res.status(200).json({ msg: 'Hi From getProfile Controller' })
}
const editProfile = (req, res, next) => {
    res.status(200).json({ msg: 'Hi From editProfile Controller' })
}

module.exports = {
    register,
    login,
    getProfile,
    editProfile
}
