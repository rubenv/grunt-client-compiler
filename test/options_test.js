'use strict';

var common = require('./common');
var assert = require('assert');
var fs = require('fs');

describe('Options', function () {
    var vars = {};

    before(function (done) {
        common.runProject('options', function (err) {
            if (err) {
                done(err);
            }
            vars = common.executePath('tmp/options/public/js/test.bundle.js', 'test');
            done();
        });
    });


    it('Compiles a project', function () {
        assert(fs.existsSync('tmp/options/public/js/test.bundle.js'));
    });

    it('Minifies a project', function () {
        assert(fs.existsSync('tmp/options/public/js/test.bundle.min.js'));
    });

    it('Picks up the library path', function () {
        assert(vars.result.libLoaded);
    });

    it('Picks up the source path', function () {
        assert(vars.result.srcLoaded);
    });
});
