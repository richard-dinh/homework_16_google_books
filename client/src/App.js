import React, {useEffect} from 'react'
import Book from './utils/Book'
import Navbar from './components/Navbar'
function App() {

  useEffect( () => {
    Book.bulkInsert()
      .then( () => {
        Book.read()
          .then(({ data: books }) => {
            console.log(books)
          })
          .catch(error => console.error(error))
      })
      .catch(error => console.error(error))
  }, [])
  return (
    <>
      <Navbar />
    </>
  )
}

export default App;
