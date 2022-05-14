// Needed Modules
require('dotenv').config()
const express = require('express')

// Initialize
const app = express()

// Homepage
app.get('/', function (req,res) {
    res.render('home')
})

// Places
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-view').createEngine())
app.use('/places', require('./Controllers/places'))

// 404 Page
app.get('*', (req, res) => {
    res.render('error404')
})

// Listen
app.listen(process.env.PORT, function(){
    console.log('I am awake!')
})