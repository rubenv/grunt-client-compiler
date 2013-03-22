'use strict';

module.exports = function (grunt) {
    this.loadTasks('../../tasks');

    this.initConfig({
        client_compiler: {
            test: {
                options: {
                    path: 'app-src',
                    libPath: 'lib',
                    pack: ['test']
                }
            }
        }
    });

    this.registerTask('default', ['client_compiler']);
};
