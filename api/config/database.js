const mongoose = require('mongoose')
const connection = () => {
  mongoose.connect('mongodb+srv://jawdan1:toto@kebablegends.msxudq9.mongodb.net/?retryWrites=true&w=majority')

  const db = mongoose.connection

  db.on('error', (err) => console.log(err))
  db.on('open', () => console.log('DATABASE ON'))
}

module.exports = { connection }
