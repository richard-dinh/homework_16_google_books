const router = require('express').Router()
const {Book} = require('../models')

//get all books
router.get('/books', (request, response) => {
  Book.find()
  .then( books => response.json(books) )
  .catch( error => {
    console.error(error)
    response.sendStatus(400)
  })
})

//create a book
router.post('/books', (request, response) => {
  Book.create(request.body)
  .then( () => response.sendStatus(200))
  .catch( error => {
    console.error(error)
    response.sendStatus(400)
  })
})

//delete book by id
router.delete('/books/:id', (request, response) => {
  Book.findOneAndDelete(request.params.id)
  .then( () =>  response.sendStatus(200))
  .catch( error => {
    console.error(error)
    response.sendStatus(400)
  })
})


module.exports = router