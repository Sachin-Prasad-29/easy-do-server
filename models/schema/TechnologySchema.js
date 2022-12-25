const mongoose = require('mongoose')

const TechnologySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    logo: {
      type: String,
      required: true
    },
    link: {
      type: String,
      default: ''
    }
  },
  { _id: false }
)

module.exports = TechnologySchema
