//SERVER SETUP
const express = require('express');
let app = express();
let port = 5000;
let Promise = require('bluebird');
app.use(express.static(__dirname + './../public/'));


//INITIALIZE DATABASE
var db = require('./../database/index.js')
const dbSeed = require('./../database/fake_data_seed.js')
dbSeed.createSeed();


//MIDDLEWARE
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


//ROUTES
app.get('/recipes', function(req, res) {
	db.pullFirst(1, (err, result) => {
		res.status(201).end()
	}) 
})

app.get('/recipes/:recipeId', function (req, res) {
	db.pullFirst(req.params.recipeId, (err, result) => {
		res.end()
	}) 
});

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

//module.exports = app;
