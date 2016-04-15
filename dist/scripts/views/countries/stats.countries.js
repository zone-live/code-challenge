define(['ractive', 'rv!/templates/statsCountries.html', 'ractiveBackboneAdapter', 'models/stats.countries.model', 'views/countries/stats.countries.options'], 
	function (Ractive, statsCountriesTmpl, backboneAdaptor, CountriesModel, barChartOptions) {
	'use strict';

	var StatsCountries = Ractive.extend({

		template: statsCountriesTmpl,
		oninit: function() {
			var model = new CountriesModel({ deckName: this.get('deck') });
			this.set('countriesModel', model);
			this.observe('deck', this.deckChanged);
		},
		decorators: {
			barChart: barChartOptions
		},
		deckChanged: function(newDeck) {
			var model = this.get('countriesModel');
			model.switchDeck(newDeck);
		},
		adapt: [backboneAdaptor]
	});

	return StatsCountries;
});