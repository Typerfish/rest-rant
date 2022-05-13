// Needed Modules
require('dotenv').config()
const express = require('express')

// Initialize
const app = express()

// Homepage
app.get('/', function (req,res) {
    res.send('Hello World')
})

// Places
app.use('/places', require('./Controllers/places'))

// 404 Page
app.get('*', (req, res) => {
    res.status(404).send('<h1>404 Page</h1>')
})

// Listen
app.listen(process.env.PORT, function(){
    console.log('I am awake!')
})