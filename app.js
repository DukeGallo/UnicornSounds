var express = require('express');
var app = express();
var songKick = require('./api.js');

app.use(express.static('./'));
app.use('/search', songKick);
app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.get('/form.js', function(req, res) {
  res.sendFile(__dirname + './form.js');
});
var port = process.env.PORT || 3000;
app.listen(port);
console.log('UnIcOrNsOuNdS!');