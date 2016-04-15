define(['backbone'], function(Backbone) {
	'use strict';

	var StatsModel = Backbone.Model.extend({
		defaults: {
			deckName: '',
			stats: []
		},
		switchDeck: function(newDeck) {
			this.set('deckName', newDeck);
			this.fetch();
		},
		parse: function(response) {
			return {
				stats: response
			};
		}
	});

	return StatsModel;
});