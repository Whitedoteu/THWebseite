const express = require('express')
const bodyParser= require('body-parser')
const app = express()

const MongoClient = require('mongodb').MongoClient

MongoClient.connect('link-to-mongodb', (err, database) => {
  // ... start the server
})
//test
app.use(bodyParser.urlencoded({extended: true}))

// All your handlers here...

app.listen(3000, () => console.log('Example app listening on port 3000!'))

app.get('/',(req,res) => {
    res.sendFile(__dirname + '/index.html')
})

app.post('/quotes', (req, res) => {
    console.log(req.body)
  })