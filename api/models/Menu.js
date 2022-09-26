const mongoose = require('mongoose')

const menuSchema = mongoose.Schema({

  id: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true,
    unique: true
  },

  description: {
    type: String,
    required: true
  },
})

module.exports = mongoose.model('Menu', menuSchema)

