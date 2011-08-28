var testFixture = require('nodeunit').testCase;
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/testing');
var shows = require('../../models/show.js').show(mongoose);
require('assert');


exports['Show'] = testFixture({
  setUp: function(callback){
    tvshow = new shows;
    tvshow.tvdb_id = 999;
    tvshow.save();
    callback();
  },
  'we have a tv db id': function(test){
    test.equals(tvshow.tvdb_id, 999);
    test.done();
  }
});
exports['Finding a show'] = testFixture({
  setUp: function(callback){
    show = new shows;
    show.name = 'Lost';
    show.tvdb_id = 999;
    show.save();
    callback();
  },
  'we find the show from the database': function(test){
    shows.search('Lost', function(err, docs){
      test.ok(docs);
      test.done();
    });
  },
  tearDown: function(callback){
    shows.remove();
    mongoose.disconnect();
    callback();
  }
});
