var // Dependencies
    express = require('express'),
    cons    = require('consolidate'),
    http    = require('http'),

    // App setup
    app     = express(),
    server  = http.createServer(app),

    // Modules
    routes  = require('./modules/routes'),
    socket  = require('./modules/socket'),
    
    // Settings
    settings = {
        port : 3700,
        env  : app.get('env'),
        root : __dirname,
        app  : '../app'
    };

// View rendering
app.engine('mjs', cons.mustache);
app.set('view engine', 'mjs');
app.set('views', settings.app + '/views');

// Middleware
app.use(express.compress());
app.use(express.json());
app.use(express.urlencoded());
app.use(express.cookieParser());

// Initialize websockets
socket.init(server);

// Initialize routes
routes.init(app, settings);

server.listen(settings.port);
console.log("Listening on port " + settings.port);

/*
 *  This code is necessary if running server with Grunt. We're not for now.
 *
// For running in Grunt env
if (settings.env === 'development') {
    exports = module.exports = server;
    // delegates user() function
    exports.use = function() {
      app.use.apply(app, arguments);
    };
}

// For running in Node env
if ('production' === settings.env || 'staging' === app.get('env')) {
    server.listen(port);
    console.log("Listening on port " + port);
}
*/
