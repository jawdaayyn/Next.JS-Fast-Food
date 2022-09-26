const mongoose = require('mongoose')

const boissonSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },

  description: {
    type: String,
    required: true
  },

  effect: {
    hp: {
      type: Number
    },

    regeneration: {
      type: Number
    },

    mana: {
      type: Number
    },

    range: {
      type: Number
    },

    attack_damage: {
      type: Number
    },

    attack_speed: {
      type: Number
    },

    armor: {
      type: Number
    },

    magic_resistance: {
      type: Number
    },

    speed: {
      type: Number
    }
  },

  price: {
    type: String,
    required: true
  },

  image: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('boisson', boissonSchema)
