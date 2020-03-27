import React, {useContext} from 'react'
import BookCard from '../BookCard'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import UserContext from '../../utils/UserContext'
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  }
}))

const Search = () => {
  let {books} = useContext(UserContext)
  const classes = useStyles()
  return(
    <div className={classes.root}>
      <Grid container spacing={3}>
        {books ? books.map( book => 
          <BookCard
            key = {book._id}
            _id = {book._id}
            link = {book.link} 
            title = {book.title}
            authors = {book.authors.map((author, i) => {
              if(i === book.authors.length - 1){
                return author
              }
              return author = author + ', '
            })}
            description = {book.description}
            image = {book.image}
            isSearch = {true}
            action = "Add to Saved Books"
          />
          ) : null}
      </Grid>
    </div>
  )
}

export default Search