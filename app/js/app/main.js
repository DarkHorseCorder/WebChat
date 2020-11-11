define(
    [
        'jquery',
        'backbone',
        'helpers',
        'views/index'
    ], function (
        $,
        Backbone,
        Helpers,
        IndexView
    ) {

    var Router = Backbone.Router.extend({

        initialize : function() {

            Backbone.history.start();

        },

        routes: {
            ''      : 'index',
            '*path' : 'default'
        },

        default : function() {
            console.log('index.htmlol');
        },

        index : function(actions) {
            var view  = new IndexView();

            Helpers.showView(view);
        }

    });

    var router = new Router();

});