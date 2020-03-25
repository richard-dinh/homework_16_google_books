import React from 'react'
import Card from '../BookCard'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  }
}))

const Search = () => {
  const classes = useStyles()
  return(
    <div className={classes.root}>
      <Grid container spacing={3}>
      <Grid item xs={4}>
        <Card />
      </Grid>
      <Grid item xs={4}>
        <Card />
      </Grid>
      <Grid item xs={4}>
        <Card />
      </Grid>
      <Grid item xs={4}>
        <Card />
      </Grid>
      <Grid item xs={4}>
        <Card />
      </Grid>
      <Grid item xs={4}>
        <Card />
      </Grid>
      <Grid item xs={4}>
        <Card />
      </Grid>
      <Grid item xs={4}>
        <Card />
      </Grid>
      <Grid item xs={4}>
        <Card />
      </Grid>
      <Grid item xs={4}>
        <Card />
      </Grid>
      <Grid item xs={4}>
        <Card />
      </Grid>
      <Grid item xs={4}>
        <Card />
      </Grid>
    </Grid>
    </div>
  )
}

export default Search