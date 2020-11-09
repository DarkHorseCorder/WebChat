var fs      = require('fs'),
    express = require('express'),
    chat    = require('./chat'),
    Router  = {
        methods : {
            getBowerComponents : function(path, callback) {
                var file = path;

                fs.readFile(file, 'utf8', function(err, data) {
                    if (err) {
                        console.log('Error reading bower.json');
                        return;
                    }

                    data = JSON.parse(data);

                    if (typeof callback === 'function') {
                        callback(data);
                    }

                    return false;
                })
            }
        }
    };

exports.init = function(app, settings) {
    var bower;

    // API globals
    app.all('/api/*', function(req, res, next) {
        // Set some headers so AJAX doesn't get fussy
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Headers', 'X-Requested-With');

        if (req.user) {
            next();
        } else {
            res.json({
                "status" : "error",
                "error"  : "Unauthenticated User"
            }, 401)
        }
    });

    // Auth globals
    app.all('/auth/*', function(req, res, next) {
        // Set some headers so AJAX doesn't get fussy
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Headers', 'X-Requested-With');
        next();
    });

    // Basic routes
    //app.get('/chat', chat.init);

    // Serve static files
    app.use(express.static(settings.app));

    // Alias Bower components
    Router.methods.getBowerComponents(settings.app + '/bower.json', function(data) {
        for (var dep in data.devDependencies) {
            app.use('/vendor', express.static(settings.app + '/bower_components/' + dep));
        }
    });
}