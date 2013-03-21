'use strict';

var clientCompiler = require('client-compiler');

module.exports = function (grunt) {
    return grunt.registerMultiTask('client_compiler', 'Compile client-side bundles', function () {
        var done = this.async();
        var basePath = process.cwd();
        var compiler = new clientCompiler.Compiler(basePath, this.target, this.data);
        compiler.compile(done);
    });
};
