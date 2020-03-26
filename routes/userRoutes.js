const router = require('express').Router()
const {User, Book} = require('../models')

//get all users
router.get('/users', (request, response) => {
  User.find().populate('books')
  .then( users => response.json(users))
  .catch( error => {
    console.error(error)
    response.sendStatus(400)
  })
})

//get user by username
router.get('/users/:username', (request, response) => {
  User.findOne({username: request.params.username}).populate('books')
  .then( user => response.json(user))
  .catch( error => {
    console.error(error)
  })
})

//create a User
router.post('/users', (request, response) => {
  User.create(request.body)
  .then( user => response.json(user))
  .catch( error => {
    console.error(error)
    response.sendStatus(400)
  })
})

//save a book to the user's book list
router.put('/users/:id', (request, response) => {
  //must have the book's id in the request body
  Book.findById(request.body.id)
  .then( book => {
    User.findByIdAndUpdate(request.params.id, { $push: { books: book._id } })
    .then(() => response.sendStatus(200))
  })
  .catch( error => {
    console.error(error)
    response.sendStatus(400)
  })
})

//delete a book from the user's saved books
router.put('/users/delete/:id', (request, response) => {
  Book.findById(request.body.id)
    .then(book => {
      User.findByIdAndUpdate(request.params.id, { $pull: { books: book._id } })
        .then(() => response.sendStatus(200))
    })
    .catch(error => {
      console.error(error)
      response.sendStatus(400)
    })
})

module.exports = router