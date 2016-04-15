define(['backbone', 'models/deckMenu.model'], function(Backbone, DeckMenuModel) {
	'use strict';

	var DeckMenuCollection = Backbone.Collection.extend({
		url: '/api/decks',
		model: DeckMenuModel,
		parse: function(response) {
			return response.decks.map(function(item) {
				return {
					name: item
				}
			})
		},
		initialize: function() {
			this.fetch();
		}
	});

	return new DeckMenuCollection();
});