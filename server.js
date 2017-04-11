var express = require("express");
var router = require('express').Router();
var mongoose = require('mongoose');
var path = require('path');
var http = require('http');
var bodyParser = require('body-parser');
var Photo = require('./models/photo')
var photosController = require('./controllers/photo')

var app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));
app.use('/', router);

mongoose.connect('mongodb://localhost/myphotoapp', function(err) {
  if (err) {
    console.log('Could not connect to mongodb on localhost. Ensure that you have mongodb running on localhost and mongodb accepts connections on standard ports!');
  }
});

//Render homepage
router.route('/')
	.get(function(req, res) {
		res.render('index');
	});

//Render photo display page
router.route('/photos')
	.get(function(req, res) {
		res.render('photos');
	})


router.route('/api/photos')
	.get(photosController.allPhotos)
	.post(photosController.savePhoto)

router.route('/api/photos/:id')
	.get(photosController.onePhoto)
	.put(photosController.updatePhoto)
	.delete(photosController.deletePhoto)

app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is up and running on http://localhost:3000/');
});