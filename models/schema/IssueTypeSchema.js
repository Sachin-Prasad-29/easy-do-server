const mongoose = require('mongoose')

const IssueTypeSchema = new mongoose.Schema({
  name: {
    type: String,
    default: ''
  },
  logo: {
    type: String,
    default: ''
  }
}, { _id: false })

module.exports = IssueTypeSchema
