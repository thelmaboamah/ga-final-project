var mongoose = require('mongoose');
var photoSchema = new mongoose.Schema({
	created_at: { type: Date, default: Date.now },
	url: {type: String, required: true},
	filter: {type: String, require: true},
	owner: { type: Schema.Types.ObjectId, ref: "User", required: true } 
});

var Photo = mongoose.model('Photo', photoSchema);

module.exports = Photo;