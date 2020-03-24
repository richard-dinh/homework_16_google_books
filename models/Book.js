const {model, Schema} = require('mongoose')

module.exports = model('book', new Schema({
  title: {
    type: String,
    required: true
  },
  authors: [{
    type: String,
    required: true,
  }],
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String
  },
  link: {
    type: String
  }
}))