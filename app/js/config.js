requirejs.config({

    deps : ['app/main'],

    paths: {
        // dependencies
        jquery     : '/vendor/jquery',
        underscore : '/vendor/underscore',
        backbone   : '/vendor/backbone',
        socketio   : '/socket.io/socket.io',
        // plugins
        mustache   : '/vendor/mustache',
        text       : '/vendor/text',
        favico     : '/vendor/favico',
        // libs
        helpers    : 'libs/helpers',
        chat       : 'libs/chat'
    },
    shim: {
        underscore : {
            exports : '_'
        },
        backbone : {
            deps : ['underscore', 'jquery'],
            exports : 'Backbone'
        },
        socketio : {
            exports : 'io'
        },
        chat : {
            exports : 'loadChat'
        }
    }

});