define(['backbone', 'ractive', 'views/navbar', 'rv!/templates/dashboard.html'], 
	function (Backbone, Ractive, Navbar, dashboardTmpl) {
	'use strict';

	var Dashboard = Ractive.extend({
		el: '#main-wrapper',
		template: dashboardTmpl,
		data: {
			deckName: ''
		},
		setCurrentDeck: function(currentDeck) {
			this.set('deckName', currentDeck);
		},
		setCurrentRoute: function(route) {
			this.set('route', route);
		},
		components: {
			Navbar: Navbar
		}
	});

	return new Dashboard();
});