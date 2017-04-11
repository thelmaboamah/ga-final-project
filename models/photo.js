var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/myphotoapp', function(err) {
  if (err) {
    console.log('Could not connect to mongodb on localhost. Ensure that you have mongodb running on localhost and mongodb accepts connections on standard ports!');
  }
});

var photoSchema = new mongoose.Schema({
	created_at: { type: Date, default: Date.now },
	url: String,
	filter: String,
	note: { type: String, maxlength: 30 }
});

var Photo = mongoose.model('Photo', photoSchema);

module.exports = Photo;