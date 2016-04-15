define(['jquery', 'backbone', 'backbone-controller'],

    function($, Backbone, User, BackboneController) {

        var MainController = Backbone.Controller.extend({
            initialize: function() {
                console.log('mainController initialized');
            },
            checkCurrentView: function(view) {
                if (this.currentView) {

                    console.log('ENTROU NA currentView');
                    //limpar view aquando mudança de página
                    this.currentView.$el.empty();
                    this.currentView.stopListening();
                    //unbind e remove da view
                    this.currentView.unbind();
                    this.currentView.remove();
                }
                this.currentView = view;

                $('.container').html(view.render());

                return this;
            },

        }); 

        return MainController;

    }

);