var mongoose = require("mongoose");
var sys = require("sys");
var schema = new mongoose.Schema({
	episodes : [Episode]
});
mongoose.model('TvShow', schema);