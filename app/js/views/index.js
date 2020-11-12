define([
    'jquery',
    'backbone',
    'mustache',
    'chat',
    'text!templates/index.html'
],  function($, Backbone, Mustache, LoadChat, IndexTemplate){
    
    var IndexView = Backbone.View.extend({

        className : 'chat',

        beforeClose : function() {
            // This is a thing you can use if you want
        },

        initialize : function() {
            // Do some stuff

            $(this.el).hide();
        },

        render : function() {

            var _this = this,
                data,
                compiledTemplate;

            data = {};
            
            compiledTemplate = Mustache.render(IndexTemplate, data);

            $(this.el).html(compiledTemplate).show(function () {
                var chat = new LoadChat();
            });          

            return this;

        }
    });

    return IndexView;
});