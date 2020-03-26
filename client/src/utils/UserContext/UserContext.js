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
  handleSearchBooks: () => {}
})

export default UserContext