var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(express.static(__dirname + "/app"));
app.use(bodyParser.json());
app.get('/', function(req, res) {
	console.log("I received a GET Request")
});

app.listen(3000);
console.log('Server running on port 3000');