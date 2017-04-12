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

//Render homepage
router.route('/')
	.get(function(req, res) {
		res.render('index');
	});

//Render photo display page
router.route('/photos')
	.get(photosController.allPhotos)

router.route('/api/photos')
	.post(photosController.savePhoto)

router.route('/photos/:id')
	.get(photosController.onePhoto)

router.route('/api/photos/:id')
	.put(photosController.updatePhoto)
	.delete(photosController.deletePhoto)

app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is up and running on http://localhost:3000/');
});