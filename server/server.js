const path = require('path')
const express = require('express')

const welcome = require('./routes/welcome')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

server.use('/api/v1/welcome', welcome)

server.get('/api/pic', (req, res) => {
  request.get('https://api.imgflip.com/get_memes/').then((picResp) => {
    res.json(picResp.body)
  })
})

module.exports = server
