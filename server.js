const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const uri = "mongodb://mongo/app";
const MongoClient = require('mongodb').MongoClient;
const PORT = 3000;
const HOST = '0.0.0.0';


MongoClient.connect(uri, (err, client) => {
  if (err) return console.log(err)
  console.log("DB is fine")
  db = client.db('maindb') // whatever your database name is
});

//test
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs')
// All your handlers here...
app.listen(PORT, HOST);

app.get('/', (req, res) => {
  
  db.collection('quotes').find().toArray(function(err, result) {
    if (err) return console.log(err)
    // send HTML file populated with quotes here
    res.render('index.ejs', {quotes: result})
  })
  
});

app.post('/quotes', (req, res) => {
  db.collection('quotes').save(req.body, (err, result) => {
    if (err) return console.log(err)

    console.log('saved to database')
    res.redirect('/')
  })
  });