var mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI ||'mongodb://localhost/myphotoapp');

var photoSchema = new mongoose.Schema({
	created_at: { type: Date, default: Date.now },
	url: { type: String, unique: true },
	filter: String,
	note: { type: String, maxlength: 30 }
});

var Photo = mongoose.model('Photo', photoSchema);

module.exports = Photo;