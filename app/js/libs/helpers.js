define([
    'jquery',
    'backbone'
], function($, Backbone){

    Backbone.View.prototype.close = function () {
        if (this.beforeClose) {
            this.beforeClose();
        }
        this.remove();
        this.unbind();
    };
    
    var Helpers = {
        showView : function(view, selector) {
            selector = selector || '.container';

            if (this.currentView) this.currentView.close();

            $(selector).html(view.render().el);

            this.currentView = view;

            return view;
        },

        doCommas : function(val) {
            while (/(\d+)(\d{3})/.test(val.toString())){
                val = val.toString().replace(/(\d+)(\d{3})/, '$1'+','+'$2');
            }
            return val;
        }
    };

    return Helpers;

});