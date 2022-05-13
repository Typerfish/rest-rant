// Needed Modules
const express = require('express')

// Initialize
const app = express()

// Homepage
app.get('/', function (req,res) {
    res.send('Hello World')
})

// Listen
app.listen(3000, function(){
    console.log('I am awake!')
})