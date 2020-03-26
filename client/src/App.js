import React, {useEffect, useState} from 'react'
import Navbar from './components/Navbar'
import SignIn from './components/SignIn'
import UserContext from './utils/UserContext'
import User from './utils/User'
import Search from './components/Search'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
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
    books: []
  })

  userState.handleInputChange = event => {
    setUserState({...userState, [event.target.name]: event.target.value})
  }
  userState.handleSignUp = event => {
    event.preventDefault()
    User.create(userState.username)
    .then(({data: user}) => {
      setUserState({...userState, userId: user._id, books: user.books, username: ''})
    })
    .catch(error => console.error(error))
  }
  userState.handleLogIn = event => {
    event.preventDefault()
    User.read(userState.username)
      .then( ({data: user}) => {
        setUserState({ ...userState, userId: user._id, books: user.books, username: '' })
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
          <Navbar />
            <Search />
          </Route>
          <Route exact path = '/saved'>
            <Navbar />
            <h1>Saved Page</h1>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
    </>
  )
}

export default App;
