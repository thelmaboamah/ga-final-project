var Photo = require('../models/photo')

//Include parameters to order by created_at
function allPhotos(req, res) {
	Photo.find({}, function(err, photos) {
		if (err) {console.log('Could not find all photos', err);}
		res.render('photos', {photos: photos});
	})
}

function onePhoto(req, res) {
	var id = req.params.id;

	Photo.findOne({_id: id}, function(err, photo) {
		if (err) { console.log ('Could not find specified photo', err);}
		res.render('show', {photo: photo });
	})
}

function savePhoto(req, res) {
	var photoData = req.body;
	var photoToSave = new Photo(photoData);
	photoToSave.save(function(err, savedPhoto){
		if (err) {console.log('Could not save photo', err)}
		res.json(savedPhoto);
	})
}

function updatePhoto(req, res) {
	var id = req.params.id;
	var updates = {
		note: req.body.note
	} //Only updating notes for now
	Photo.findOneAndUpdate({_id: id}, updates, {new: true}, function(err, updatedPhoto){
		if (err){ console.log('Could not update photo', err );}
		res.json(updatedPhoto);
	})
}

function deletePhoto(req, res) {
	var id = req.params.id;
	Photo.findOneAndRemove({_id: id}, function(err, deletedPhoto) {
		if (err) {console.log('Could not delete photo', err);}
		res.json(deletedPhoto)
	})
}

module.exports = {
	allPhotos: allPhotos,
	onePhoto: onePhoto,
	savePhoto: savePhoto,
	updatePhoto: updatePhoto,
	deletePhoto: deletePhoto
}