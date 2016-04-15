'use strict';

require(['ractive', 'backbone', 'routes/Router', 'views/dashboard', 'chartjs'], function (Ractive, Backbone, Router, Dashboard, Chart) {

	var router = new Router();
	Chart.defaults.global.responsive = true;

	if (!Backbone.history.start()) {
		router.navigate('/', { trigger: true });
	}
	//Ractive.DEBUG = /unminified/.test(function(){});
});