// Mods & Globes
require('dotenv').config()
const express = require('express')
const app = express()
const methodOverride = require('method-override')

// Homepage
app.get('/', function (req,res) {
    res.render('home')
})

// Express
app.set('views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))

// Controllers & Routes
app.use('/places', require('./Controllers/places'))
app.use(express.urlencoded({ extended: true }))

// 404 Page
app.get('*', (req, res) => {
    res.render('error404')
})

// Listen
app.listen(process.env.PORT, function(){
    console.log('I am awake!')
})