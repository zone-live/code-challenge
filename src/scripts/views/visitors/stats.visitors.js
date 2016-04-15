define(['ractive', 'rv!/templates/statsVisitors.html', 'ractiveBackboneAdapter', 'models/stats.visitors.model', 'views/visitors/stats.visitors.options' ], 
	function (Ractive, statsVisitorsTmpl, backboneAdaptor, VisitorsModel, lineChartOptions ) {
	'use strict';

	var StatsVisitors = Ractive.extend({
		
		template: statsVisitorsTmpl,
		oninit: function() {
			var model = new VisitorsModel({ deckName: this.get('deck') });
			this.set('visitorsModel', model);
			this.observe('deck', this.deckChanged);
		},
		decorators: {
			lineChart: lineChartOptions
		},
		deckChanged: function(newDeck) {
			var model = this.get('visitorsModel');
			model.switchDeck(newDeck);
		},
		adapt: [backboneAdaptor]
	});

	return StatsVisitors;
});