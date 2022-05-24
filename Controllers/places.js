const express = require('express')
const app = express()
const router = require('express').Router()
const places = require('../models/places.js')

router.get('/new', (req, res) =>{
    res.render('places/new')
})

router.get('/:id', (req, res) => {
    let id = Number(req.params.id)
    if (isNaN(id)){
        res.render('error404')
    }
    else if (!places[id]){
        res.render('error404')
    }
    else {
        res.render('places/show', {place : places[id]})
    }
})

router.post('/', (req, res) => {
    if (!req.body.pic){
        // Default Image
        req.body.pic = 'http://placekitten.com/400/400'
    }
    if (!req.body.city){
        // Default City
        req.body.city = 'Anytown'
    }
    if (!req.body.state){
        // Default State
        req.body.state = 'USA'
    }
    places.push(req.body)
    res.redirect('/places')
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