const mongoose = require('mongoose')

const TechnologySchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    logo: {
        type: String,
        require: true,
    },
    link: {
        type: String,
        default: '',
    },
})

module.exports = TechnologySchema
