define(['ractive', 'views/countries/stats.countries', 'views/visitors/stats.visitors', 'rv!/templates/stats.html'], 
	function (Ractive, Countries, Visitors, statsTmpl) {
	'use strict';

	var Stats = Ractive.extend({
		template: statsTmpl,
		components: {
			Countries: Countries,
			Visitors: Visitors
		}
	});

	return Stats;
});