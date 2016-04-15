define(['models/stats.model'], function(StatsModel) {
	'use strict';

	var StatsVisitorsModel = StatsModel.extend({
		url: function() {
			var deckName = this.get('deckName');
			return '/api/decks/'+ deckName +'/stats/visitors';
		}
	});

	return StatsVisitorsModel;
});