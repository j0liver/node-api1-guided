const express = require('express')

const server = express()

const db = require('./data/hubs-model')

server.get('/', (req, res) => {
    res.send({ api: 'it works lol....' })

})

server.get('/hubs', (req, res) => {
    db.find().then(hubs => res.status(200).json(hubs))
    .catch(err => {
        console.log('error on get hubs', err)
        res.status(500).json({ error: 'no hubs from db'})
    })
})

server.get('/', (req, res) => {
    res.send({ api: 'it works lol....' })

})

server.get('/', (req, res) => {
    res.send({ api: 'it works lol....' })

})

const PORT = 4000

server.listen(PORT, () => console.log(`api is running on port ${PORT}`))
