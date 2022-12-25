const mongoose = require('mongoose')
const IssueSchema = require('./schema/IssueSchema')

const backlogSchema = new mongoose.Schema(
  {
    issues: {
      type: [IssueSchema],
      default: []
    }
  },
  { timestamps: true }
)

module.exports = mongoose.model('Backlog', backlogSchema)
