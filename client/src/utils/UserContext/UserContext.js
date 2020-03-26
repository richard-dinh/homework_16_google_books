import {createContext} from 'react'

const UserContext = createContext({
  username: '',
  userId: '',
  books: [],
  handleInputChange: () => {},
  handleLogIn: () => {},
  handleSignUp: () => {},
  handleSignOut: () => {},
  handleAddToSaved: () => {},
  handleSearchBooks: () => {}
})

export default UserContext