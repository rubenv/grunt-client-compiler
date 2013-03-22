'use strict';

var clientCompiler = require('client-compiler');

function getCompiler(self) {
    var basePath = process.cwd();
    var options = self.options({
        verbose: false
    });

    return new clientCompiler.Compiler(basePath, self.target, options);
}

module.exports = function (grunt) {
    grunt.registerMultiTask('client_compiler', 'Compile client-side bundles', function () {
        getCompiler(this).compile(this.async());
    });

    grunt.registerMultiTask('client_compiler_bundle', 'Compile client-side bundles: Bundle only', function () {
        getCompiler(this).compileBundle(this.async());
    });

    grunt.registerMultiTask('client_compiler_min', 'Compile client-side bundles: Minify only', function () {
        getCompiler(this).compileMin(this.async());
    });
};
