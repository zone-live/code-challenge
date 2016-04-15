define(['ractive', 'rv!/templates/navbar.html'], function (Ractive, navbarTmpl) {
	'use strict';

	var Navbar = Ractive.extend({
		template: navbarTmpl
	});

	return Navbar;
});