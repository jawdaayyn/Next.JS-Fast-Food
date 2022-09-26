const mongoose = require('mongoose')

const kebabSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },

  description: {
    type: String,
    required: true
  },

  hp: {
    type: Number,
    required: true
  },

  regeneration: {
    type: Number,
    required: true
  },

  mana: {
    type: Number,
    required: true
  },

  range: {
    type: Number,
    required: true
  },

  speed: {
    type: Number,
    required: true
  },

  armor: {
    type: Number,
    required: true
  },

  magic_resistance: {
    type: Number,
    required: true
  },

  price: {
    type: String,
    required: true
  },

  image: {
    type: String,
    required: true
  },

  recommandation: {
    type: String
  }
})

module.exports = mongoose.model('Kebab', kebabSchema)
