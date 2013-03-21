'use strict';

module.exports = function (grunt) {
    this.loadTasks('../../tasks');

    this.initConfig({
        client_compiler: {
            simple: {

            }
        }
    });

    this.registerTask('default', ['client_compiler']);
};
