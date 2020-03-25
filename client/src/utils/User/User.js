import axios from 'axios'

const User = {
  read: username => axios.get(`/api/users/${username}`),
  create: username => axios.post('/api/users', {username}),
  update: (userId, bookId) => axios.put(`/api/users/${userId}`, {id: bookId}),
  delete: (userId, bookId) => axios.delete(`/api/users/${userId}`, {id: bookId})

}

export default User