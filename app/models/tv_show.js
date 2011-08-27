var mongoose = require("mongoose");
var sys = require("sys");
require('./season');
var schema = new mongoose.Schema({
	tvdb_id : { type: Number, unique: true }
	, name : { type: String }
	, seasons : [Season]
});

TvShow = mongoose.model('TvShow', schema);
