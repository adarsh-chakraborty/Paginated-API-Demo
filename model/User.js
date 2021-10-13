const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
	uuid: Number,
	userName: String
});

module.exports = mongoose.model('User', userSchema);
