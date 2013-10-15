/*jslint node:true*/

/*
 * grunt-json2sass
 * https://github.com/renan/grunt-json2sass
 *
 * Copyright (c) 2013 Renan Couto
 * Licensed under the GNU GENERAL PUBLIC LICENSE Version 2.
 * https://github.com/renancouto/grunt-json2sass/blob/master/LICENSE
 */

'use strict';

module.exports = function (grunt) {

    grunt.initConfig({
        jslint: {
            all: [
                'Gruntfile.js',
                'tasks/*.js',
                '<%= nodeunit.tests %>'
            ]
        },

        clean: {
            tests: ['tmp']
        },

        json2sass: {
            shallow: {
                files: {
                    'tmp/shallow.sass': 'test/fixtures/shallow.json'
                }
            },
            deep: {
                files: {
                    'tmp/deep.sass': 'test/fixtures/deep.json'
                }
            }
        },

        nodeunit: {
            tests: ['test/*_test.js']
        }
    });

    grunt.loadTasks('tasks');

    grunt.loadNpmTasks('grunt-jslint');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-nodeunit');

    grunt.registerTask('test', ['clean', 'json2sass', 'nodeunit']);
    grunt.registerTask('default', ['jslint', 'test']);
};