var mongoose = require('mongoose');
var photoSchema = new mongoose.Schema({
	created_at: { type: Date, default: Date.now },
	url: String,
	filter: String,
	note: String //Add length restriction
});

var Photo = mongoose.model('Photo', photoSchema);

module.exports = Photo;