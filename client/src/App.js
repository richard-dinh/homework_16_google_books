import React, {useEffect} from 'react'
import Book from './utils/Book'
import Navbar from './components/Navbar'
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
        <Navbar />
        
        <Switch>
          <Route exact path = '/'>
            <h1>Search Page</h1>
          </Route>
          <Route exact path = '/saved'>
            <h1>Saved Page</h1>
          </Route>
        </Switch>
      </Router>
    </>
  )
}

export default App;
