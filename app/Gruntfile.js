module.exports = function(grunt) {
    // load all grunt tasks
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    // Project configuration.
    grunt.initConfig({
        pkg  : grunt.file.readJSON('package.json'),
        sass : {
            dist : {
                options : {
                    style    : 'compressed',
                    loadPath : ['bower_components', 'css/vendor'],
                    banner   : '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> / (C)<%= grunt.template.today("yyyy") %> <%= pkg.author %> */'
                },
                files : {
                    'css/main.css' : 'css/main.scss'
                }
            }
        },
        jshint : {
            all: ['js/**/*.js']
        },
        watch : {
            css : {
                files : 'css/**/*.scss',
                tasks : ['sass']
            },
            js : {
                files : 'js/**/*.js',
                tasks : ['jshint']
            }
        }
    });

    // Default task(s).
    grunt.registerTask('default', ['sass', 'watch']);

};