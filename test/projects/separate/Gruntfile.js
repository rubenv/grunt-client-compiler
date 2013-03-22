'use strict';

module.exports = function (grunt) {
    this.loadTasks('../../tasks');

    this.initConfig({
        client_compiler_bundle: {
            simple: {

            }
        },

        client_compiler_min: {
            simple: {

            }
        }
    });

    this.registerTask('default', ['client_compiler_bundle', 'client_compiler_min']);
};
