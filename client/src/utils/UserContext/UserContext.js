import {createContext} from 'react'

const UserContext = createContext({
  username: '',
  userId: '',
  books: [],
  handleInputChange: () => {},
  handleSubmit: () => {},
  handleSignUp: () => {}
})

export default UserContext