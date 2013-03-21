'use strict';

module.exports = function (grunt) {
    this.loadNpmTasks('grunt-contrib-clean');
    this.loadNpmTasks('grunt-contrib-jshint');
    this.loadNpmTasks('grunt-contrib-watch');
    this.loadNpmTasks('grunt-contrib-copy');
    this.loadNpmTasks('grunt-mocha-cli');
    this.loadNpmTasks('grunt-mkdir');
    this.loadNpmTasks('grunt-release');
    this.loadTasks('tasks');

    this.initConfig({
        jshint: {
            all: [
                'Gruntfile.js',
                'tasks/*.js',
                'test/*.js'
            ],
            options: {
                jshintrc: '.jshintrc',
            },
        },

        clean: {
            all: ['tmp']
        },

        copy: {
            test: {
                files: [
                    {
                        src: ['**'],
                        dest: 'tmp/',
                        cwd: 'test/projects/',
                        expand: true
                    }
                ]
            }
        },

        watch: {
            all: {
                files: ['tasks/**.js', 'test/**'],
                tasks: ['test']
            }
        },

        mochacli: {
            options: {
                files: 'test/*_test.js'
            },
            spec: {
                options: {
                    reporter: 'spec',
                    slow: 10000,
                    timeout: 20000
                }
            }
        }
    });

    this.registerTask('default', ['test']);
    this.registerTask('build', ['jshint']);
    this.registerTask('package', ['build', 'release']);
    this.registerTask('test', ['build', 'clean', 'copy:test', 'mochacli']);
};
