define(['backbone', 'views/dashboard', 'views/deckMenu', 'views/slideViewer', 'views/stats'], 
    function(Backbone, Dashboard, DeckMenu, SlideViewer, Stats) {

    var Router = Backbone.Router.extend({
        
        currentView: null,
        routes: {
            '':                     'root',
            'slide/:name(/:index)': 'slide',
            'stats/:name':          'stats'
        },
        initialize: function () {
            this.on('route', function(name) {
                Dashboard.setCurrentRoute(name);
            });
        },
        root: function() {
            this.currentView = new DeckMenu({
                el: '.dashboard-container'
            });
        },
        slide: function(name, index) {
            index = +index || 1;
            this.currentView = new SlideViewer({
                el: '.dashboard-container',
                currentSlide: index
            });
            this.currentView.set('deckName', name);
            Dashboard.setCurrentDeck(name);
        },
        stats: function(name) {
            this.currentView = new Stats({
                el: '.dashboard-container'
            }); 
            this.currentView.set('deckName', name);
            Dashboard.setCurrentDeck(name);
        }
    });

    return Router;
});