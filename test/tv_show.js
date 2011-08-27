var vows = require('vows'),
    assert = require('assert');

require('../app/models/tv_show');
require('../app/models/season');
require('../app/models/episode');


vows.describe('TV Show').addBatch({
	'save a show': {
	  topic: function () {
		show = new TvShow();
		show.name = 'Test';
		show.tvdb_id = 123;
		show.save();
		return show;
		},

		'we have an API url': function (topic) {
			assert.isUndefined(topic.url);
		},

		'we have an ID for tv show': function (topic) {
			assert.isNumber(topic.tvdb_id);
		},

	  'get tv show name': function (topic) {
	      assert.equal (topic.name, 'Test');
	  }
  }
}).addBatch({
	'search for an existing tv show on our database': {
		topic: function () {
			show = new TvShow();
			show.name = 'Lost';
			show.tvdb_id = 123;
			show.save();
			
			return TvShow.search('Lost')
		},
		'should receive an array': function (topic) {
			assert.include(topic, show);
		}
	}
}).export(module);
