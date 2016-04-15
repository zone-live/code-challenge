define(['backbone', 'ractive', 'collections/deckMenu.collection', 'ractiveBackboneAdapter', 'rv!/templates/deckMenu.html'], 
	function (Backbone, Ractive, DeckMenuCollection, backboneAdaptor, deckMenuTmpl) {
	'use strict';

	var DeckMenu = Ractive.extend({
		template: deckMenuTmpl,
		router_: new Backbone.Router(),
		data: function () {
			return {
				decks: DeckMenuCollection
			}
		},
		oninit: function() {
			this.on('openBoard', this.openBoard);
		},
		openBoard: function(event, deckName) {
			this.router_.navigate('slide/' + deckName + '/1', {trigger: true});
		},
		adapt: [backboneAdaptor]
	});

	return DeckMenu;
});