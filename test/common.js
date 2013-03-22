'use strict';

var fs = require('fs');
var vm = require('vm');
var grunt = require('grunt');

function handleSpawnOutput(cb) {
    return function (err, result) {
        if (!err) {
            cb();
        } else {
            cb(result.stdout);
        }
    };
}

function runCommand(folder, command, args, cb) {
    grunt.util.spawn({
        cmd: command,
        args: args,
        opts: {
            cwd: folder
        }
    }, handleSpawnOutput(cb));
}

module.exports = {
    runProject: function (project, cb) {
        runCommand(__dirname + '/../tmp/' + project, 'grunt', [], cb);
    },

    executePath: function (path, entry) {
        var vars = { result: {} };
        var context = vm.createContext(vars);
        vm.runInContext(fs.readFileSync(path, 'utf8'), context);
        if (entry) {
            vm.runInContext("require('" + entry + "');", context);
        }
        return vars;
    }
};
