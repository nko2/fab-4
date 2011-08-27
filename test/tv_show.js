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
	},

        'we get Infinity': function (topic) {
            assert.equal (topic, Infinity);
        }
    },
    'but when dividing zero by zero': {
        topic: function () { return 0 / 0 },

        'we get a value which': {
            'is not a number': function (topic) {
                assert.isNaN (topic);
            },
            'is not equal to itself': function (topic) {
                assert.notEqual (topic, topic);
            }
        }
    }
}).export(module);
