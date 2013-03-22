'use strict';

var common = require('./common');
var assert = require('assert');
var fs = require('fs');

describe('Multiple', function () {
    var vars = {};
    var vars2 = {};

    before(function (done) {
        common.runProject('multiple', function (err) {
            if (err) {
                done(err);
            }
            vars = common.executePath('tmp/multiple/public/js/test.bundle.js', 'test');
            vars2 = common.executePath('tmp/multiple/public/js/test2.bundle.js', 'test');
            done();
        });
    });


    it('Compiles both targets', function () {
        assert(fs.existsSync('tmp/multiple/public/js/test.bundle.js'));
        assert(fs.existsSync('tmp/multiple/public/js/test2.bundle.js'));
    });

    it('Minifies both targets', function () {
        assert(fs.existsSync('tmp/multiple/public/js/test.bundle.min.js'));
        assert(fs.existsSync('tmp/multiple/public/js/test2.bundle.min.js'));
    });

    it('Picks up the library path', function () {
        assert(vars.result.libLoaded);
    });

    it('Picks up the source path', function () {
        assert(vars.result.srcLoaded);
        assert(!vars.result.src2Loaded);
    });

    it('Allows overriding options', function () {
        assert(!vars2.result.srcLoaded);
        assert(vars2.result.src2Loaded);
    });
});
