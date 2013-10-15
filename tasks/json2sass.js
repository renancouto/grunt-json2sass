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

    var json2sass = require('json2sass');

    grunt.registerMultiTask('json2sass', 'Generate SASS vars file out of a JSON', function () {

        // var options = this.options();

        this.files.forEach(function (f) {

            var src = f.src
                .filter(function (filepath) {
                    if (!grunt.file.exists(filepath)) {
                        grunt.log.warn('Source file "' + filepath + '" not found.');
                        return false;
                    }

                    return true;
                })
                .map(function (filepath) {
                    return grunt.file.read(filepath);
                })
                .join('');

            grunt.file.write(f.dest, json2sass.writeSass(JSON.parse(src)));
            grunt.log.writeln('File "' + f.dest + '" created.');
        });
    });
};