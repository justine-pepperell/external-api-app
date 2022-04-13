const path = require('path')
const express = require('express')
const request = require('superagent') //super agent neecds to be in server if we do this way
const welcome = require('./routes/welcome')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

server.use('/api/v1/welcome', welcome)

server.get('/api/catFact', (req, res) => {
  request.get('https://catfact.ninja/fact').then((catResponse) => {
    res.json(catResponse.body)
  })
})

//Signed up for finnhub.io API key
//c9b1ni2ad3idfn1smat0 - https://finnhub.io/dashboard

module.exports = server
