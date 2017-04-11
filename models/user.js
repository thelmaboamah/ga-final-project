var mongoose = require('mongoose');
var userSchema = new mongoose.Schema({
	name: {type: String, require: true},
	email: {type: String, require: true}
});

var User = mongoose.model('User', userSchema);

module.exports = User;
