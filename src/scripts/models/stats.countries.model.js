define(['models/stats.model'], function(StatsModel) {
	'use strict';

	var StatsCountriesModel = StatsModel.extend({
		url: function() {
			var deckName = this.get('deckName');
			return '/api/decks/'+ deckName +'/stats/countries';
		}
	});

	return StatsCountriesModel;
});