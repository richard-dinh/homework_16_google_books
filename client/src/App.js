import React, {useEffect, useState} from 'react'
import Navbar from './components/Navbar'
import SignIn from './components/SignIn'
import UserContext from './utils/UserContext'
import User from './utils/User'
import Book from './utils/Book'
import Search from './components/Search'
import Saved from './components/Saved'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import {useHistory} from 'react-router-dom'
function App() {
  //seeding database
  // useEffect( () => {
  //   Book.bulkInsert()
  //     .then( () => {
  //       Book.read()
  //         .then(({ data: books }) => {
  //           console.log(books)
  //         })
  //         .catch(error => console.error(error))
  //     })
  //     .catch(error => console.error(error))
  // }, [])

  const [userState, setUserState] = useState({
    username: '',
    userId: '',
    userInput: '',
    books: [],
    savedBooks: []
  })

  userState.handleInputChange = event => {
    setUserState({...userState, [event.target.name]: event.target.value})
  }
  userState.handleSignUp = event => {
    event.preventDefault()
    User.create(userState.username)
    .then(({data: user}) => {
      setUserState({...userState, userId: user._id, savedBooks: user.books, username: ''})
    })
    .catch(error => console.error(error))
  }
  userState.handleLogIn = event => {
    event.preventDefault()
    User.read(userState.username)
      .then( ({data: user}) => {
        setUserState({ ...userState, userId: user._id, savedBooks: user.books, username: ''})
      })
      .catch(error => console.error(error))
  }

  userState.handleSignOut = () => {
    setUserState({ ...userState, userId:'', savedBooks: [] })
  }

  userState.handleAddToSaved = (userId, bookId, book) => {
    User.update(userId, bookId)
    .then( () => {
      let tempArr = JSON.parse(JSON.stringify(userState.savedBooks))
      tempArr.push(book)
      setUserState({...userState, savedBooks: tempArr})
    })
    .catch(error => console.error(error))
  }

  userState.handleSearchBooks = (name) => {
    Book.get(name)
    .then( ({data: books}) => {
      setUserState({...userState, books, userInput: ''})
    })
  }

  userState.handleDelete = (userId, bookId) => {
    User.delete(userId, bookId)
    .then( () => {
      let tempArr = JSON.parse(JSON.stringify(userState.savedBooks))
      tempArr.forEach((book, i) => {
        if (book._id === bookId) {
          tempArr.splice(i, 1)
        }
      })
      setUserState({...userState, savedBooks: tempArr})
    })
    .catch(error => console.error(error))
  }
  return (
    <>
    <UserContext.Provider value = {userState}>
    <Router>
        <Switch>
          <Route exact path = {userState.userId ? '/signIn' :'/'}>
            <SignIn />
          </Route>
          <Route exact path = {userState.userId ? '/' : '/search'}>
          <Navbar
            title = 'Search for A Book'
          />
            <Search />
          </Route>
            <Route exact path={userState.userId ? '/saved' : '/'}>
              <Navbar
                title='Saved Books'
              />
            <Saved />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
    </>
  )
}

export default App;
