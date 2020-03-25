const {model, Schema} = require('mongoose')

module.exports = model('user', new Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  books: [{
    type: Schema.Types.ObjectId,
    ref: 'book'
  }]
}))