var express = require('express');
var app = express();
var songKick = require('./api.js');

(function() {
    'use strict';
    angular.module('formlyApp', ['formly', 'formlyBootstrap']);
})();

app.use(express.static('./'));
app.use('/search', songKick);
app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.get('/form.js', function(req, res) {
  res.sendFile(__dirname + './form.js');
});

app.listen(1337);
console.log('UnIcOrNsOuNdS!');