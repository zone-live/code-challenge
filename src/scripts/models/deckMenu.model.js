define(['backbone'], function(Backbone) {
	'use strict';

	var DeckMenuModel = Backbone.Model.extend({
		defaults: {
			name: ''
		}
	});

	return DeckMenuModel;
});