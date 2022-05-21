const express = require('express')
const app = express()
const router = require('express').Router()

router.get('/new', (req, res) =>{
    res.render('places/new')
})

router.post('/', (req, res) => {
    console.log(req.body)
    res.send('POST /places')
})

app.get('/', (req, res) => {
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: '/images/restaurant-tables.webp'
    }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: '/images/Coffee-Cat.png'
    }]
    res.render('places/index', {places})
})

module.exports = router