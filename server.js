const express = require('express');
const bodyParser = require('body-parser');
const app = express();
var uri = "mongodb://mongo/app";
const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('your-mongodb-url', (err, client) => {
  if (err) return console.log(err)
  db = client.db('maindb') // whatever your database name is
  app.listen(3000, () => {
    console.log('listening on 3000')
  })
});

//test
app.use(bodyParser.urlencoded({extended: true}));

// All your handlers here...

app.listen(3000, () => console.log('Example app listening on port 3000!'));

app.get('/', (req, res) => {
  db.collection('quotes').find().toArray(function(err, results) {
    console.log(results)
    // send HTML file populated with quotes here
  })
});

app.post('/quotes', (req, res) => {
  db.collection('quotes').save(req.body, (err, result) => {
    if (err) return console.log(err)

    console.log('saved to database')
    res.redirect('/')
  })
  });