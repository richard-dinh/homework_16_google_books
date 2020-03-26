import {createContext} from 'react'

const UserContext = createContext({
  username: '',
  userId: '',
  userInput: '',
  books: [],
  savedBooks: [],
  handleInputChange: () => {},
  handleLogIn: () => {},
  handleSignUp: () => {},
  handleSignOut: () => {},
  handleAddToSaved: () => {},
  handleSearchBooks: () => {},
  handleDelete: () => {}
})

export default UserContext