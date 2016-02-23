var express = require('express');                    
var router = express.Router();
var request = require('request');
var bodyParser = require('body-parser');
var textParser = bodyParser.text();

router.post('/', textParser, function(req,res) {
  var input = req.body;
  var url = "http://api.songkick.com/api/3.0/search/artists.json?query="+ input + "&apikey=w3AokocXm77pNg3k" ;
  console.log(url);
  var options = {
    url: url,
    headers: {
      'Accept': 'application/json',                     
      'Content-Type': 'application/json'
    }
  };

request.get(options, function (error, response, body) {
  if (!error && res.statusCode == 200) {
    res.send(body);
    console.log('Call has been made!');
    }
  });
});

request.get(options, function (error, response, body) {
  if (!error && res.statusCode == 200) {
    res.send(body);
    }
  });
});

module.exports = router;