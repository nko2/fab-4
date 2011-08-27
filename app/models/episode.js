var mongoose = require("mongoose");
var sys = require("sys");
var schema = new mongoose.Schema({
  name : { type: String }
});

Episode = module.exports = mongoose.model('Episode', schema);
