var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var massive = require('massive');

var massiveServer = massive.connectSync({
  connectionString: "postgres://localhost/massive-demo"
});



var app = express();
app.use(bodyParser.json());

app.set('db', massiveServer);

var db = app.get('db');

console.log(db);

var port = 3000;




app.get('/incidents', function(req, res) {

  db.get_all_incidents(function(err, incidents){
    res.send(incidents);
  });
});





app.post('/incidents', function(req, res) {
  console.log('POST sighting');
});

app.listen(port, function() {
  console.log("Started server on port", port);
});
