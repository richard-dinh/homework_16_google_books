require('dotenv').config()

const express = require('express')
const {join} = require('path')

const app = express()

app.use(express.static(join(__dirname, 'public', 'build')))
app.use(express.urlencoded({extended: true}))
app.use(express.json())


require('./config')
  .then(() => app.listen(process.env.PORT || 3001))
  .catch(error => console.error(error))
