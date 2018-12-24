//SERVER SETUP
const express = require('express');
let app = express();
let port = 5000;
let Promise = require('bluebird');
app.use(express.static(__dirname + './../public'));
//var path = __dirname + './../public'
//app.use("/recipes/:recipeId",express.static(__dirname + './../public'));



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
		//res.status(201).send(JSON.stringify(result))
		res.render('path')
	}) 
})

app.get('/recipes/:recipeId', function (req, res) {
	db.pullFirst(req.params.recipeId, (err, result) => {
		res.status(201).send(JSON.stringify(result));
	}) 
});

app.get('/recipes/:recipeId/stores', function (req, res) {
	db.pullStoreArray(req.params.recipeId, (err, result) => {
		res.status(201).send(JSON.stringify(result));
	}) 
});

app.get('/stores/:storeId', function (req, res) {
	db.pullStoreInformation(req.params.storeId, (err, result) => {
		res.status(201).send(JSON.stringify(result));
	}) 
});

app.get('/products/:storeId', function (req, res) {
	db.pullProductInformation(req.params.storeId, (err, result) => {
		res.status(201).send(JSON.stringify(result));
	}) 
});


app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

module.exports = app;
