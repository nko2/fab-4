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
	show.save();
	return show;
	},

        'we get Infinity': function (topic) {
            assert.equal (topic.name, 'Test');
        }
    }
}).export(module);
