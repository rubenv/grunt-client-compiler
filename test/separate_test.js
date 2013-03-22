'use strict';

var common = require('./common');
var assert = require('assert');
var fs = require('fs');

describe('Separate', function () {
    before(function (done) {
        common.runProject('separate', done);
    });

    it('Compiles a project', function () {
        assert(fs.existsSync('tmp/separate/public/js/simple.bundle.js'));
    });

    it('Minifies a project', function () {
        assert(fs.existsSync('tmp/separate/public/js/simple.bundle.min.js'));
    });
});
