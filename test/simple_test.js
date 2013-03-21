'use strict';

var common = require('./common');
var assert = require('assert');
var fs = require('fs');

describe('Simple', function () {
    before(function (done) {
        common.runProject('simple', done);
    });

    it('Compiles a project', function () {
        assert(fs.existsSync('tmp/simple/public/js/simple.bundle.js'));
    });
});
