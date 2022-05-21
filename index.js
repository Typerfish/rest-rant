// Mods & Globes
require('dotenv').config()
const express = require('express')
const app = express()

// Homepage
app.get('/', function (req,res) {
    res.render('home')
})

// Express
app.set('views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))

// Controllers & Routes
app.use('/places', require('./Controllers/places'))

// 404 Page
app.get('*', (req, res) => {
    res.render('error404')
})

// Listen
app.listen(process.env.PORT, function(){
    console.log('I am awake!')
})