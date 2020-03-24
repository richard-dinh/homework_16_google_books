import React, {useEffect} from 'react'
import Book from './utils/Book'

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
    <h1>Hello World</h1>
  )
}

export default App;
