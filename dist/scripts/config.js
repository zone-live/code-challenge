require.config({
    baseUrl: './scripts',
    paths: {
        'jquery': 'libs/jquery.min',
        'underscore': 'libs/underscore.min',
        'text': 'libs/text',
        'backbone': 'libs/backbone.min',
        'backbone-controller': 'libs/backbone.controller',
        'chartjs': 'libs/Chart.min',
        'ractive': 'libs/ractive.min',
        'rv': 'libs/rv',
        'ractiveBackboneAdapter': 'libs/ractive-adaptors-backbone.min'
    },
    //Sets the configuration for your third party scripts that are not AMD compatible
    shim: {
        // Twitter Bootstrap jQuery plugins
        'bootstrap': ['jquery']
    },
	name: 'main',
	stubModules: [ 'rv' ]
});