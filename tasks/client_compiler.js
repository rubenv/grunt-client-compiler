'use strict';

var clientCompiler = require('client-compiler');

module.exports = function (grunt) {
    return grunt.registerMultiTask('client_compiler', 'Compile client-side bundles', function () {
        var done = this.async();
        var basePath = process.cwd();

        var options = this.options({
            verbose: false
        });
        options.wait = true;

        var compiler = new clientCompiler.Compiler(basePath, this.target, options);
        compiler.compile(done);
    });
};
