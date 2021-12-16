const express = require('express');

const app  = express();

app.get('/', function (req, res) {
   res.setHeader('Access-Control-Allow-Origin', '*'); 
    var json = {'message': 'Hello from the server!'}
    res.send(json);
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000! Go to http://localhost:3000/');
  });