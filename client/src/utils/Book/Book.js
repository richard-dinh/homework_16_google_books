import axios from 'axios'

const Book = {
  read: () => axios.get('/api/books'),
  create: book => axios.post('/api/books', book),
  delete: id => axios.delete(`/api/books/${id}`),
  bulkInsert: () => axios.post('/api/books/bulk')
}

export default Book