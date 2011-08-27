var mongoose = require("mongoose");
var sys = require("sys");
require('./episode');
var schema = new mongoose.Schema({
	episodes : [Episode]
});
Season = mongoose.model('Season', schema);
