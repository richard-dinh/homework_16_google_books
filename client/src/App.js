import React, {useEffect} from 'react'
import Book from './utils/Book'
import Navbar from './components/Navbar'
import SignIn from './components/SignIn'
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
  return (
    <>
      
    <Router>
        
        <Switch>
          <Route exact path = '/'>
            <SignIn />
          </Route>
          <Route exact path = '/search'>
          <Navbar />
            <h1>Search Page</h1>
          </Route>
          <Route exact path = '/saved'>
            <Navbar />
            <h1>Saved Page</h1>
          </Route>
        </Switch>
      </Router>
    </>
  )
}

export default App;
