var mongoose = require("mongoose");
var sys = require("sys");

var schema = new mongoose.Schema({
	tvdb_id : { type: Number, unique: true }
	, name : { type: String }
	, seasons : [Season]
});

mongoose.model('TvShow', schema);