import {createContext} from 'react'

const UserContext = createContext({
  username: '',
  userId: '',
  books: [],
  handleInputChange: () => {},
  handleLogIn: () => {},
  handleSignUp: () => {},
  handleSignOut: () => {}
})

export default UserContext