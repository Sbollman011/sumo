const express = require('express');

const app  = express();
var text = {};
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); 
    next();
  })


app.get('/', function (req, res) {
    var json = {'message': 'Hello from the server!'}
    res.send(json);
});

app.get('/resp', function (req, res) {
    res.send(text);
});
  

app.listen(3000, function () {
    console.log('Example app listening on port 3000! Go to http://localhost:3000/');
  });