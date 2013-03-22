'use strict';

module.exports = function (grunt) {
    this.loadTasks('../../tasks');

    this.initConfig({
        client_compiler: {
            // Shared options
            options: {
                path: 'app-src',
                libPath: 'lib',
                pack: ['test']
            },

            // Separate targets
            test: {

            },

            test2: {
                options: {
                    path: 'src'
                }
            }
        }
    });

    this.registerTask('default', ['client_compiler']);
};
