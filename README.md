# grunt-client-compiler

> Grunt wrapper for client-compiler.

[![Build Status](https://travis-ci.org/rubenv/grunt-client-compiler.png?branch=master)](https://travis-ci.org/rubenv/grunt-client-compiler)

## Getting Started
This plugin requires Grunt `~0.4.0`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-client-compiler --save-dev
```

One the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-client-compiler');
```

## The "client_compiler" task

### Overview
In your project's Gruntfile, add a section named `client_compiler` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  client_compiler: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
})
```

The name of each target is used as the output name. E.g.: If you define a target named `test`, it will create a bundle named `test.bundle.min.js`.

### Options

#### options.path
Type: `String`
Default value: `'src'`

Path (relative to the location of the Gruntfile) where source files can be found.

#### options.pack
Type: `Array`
Default value: `[]`

Array of library file names. Do not include the `.js` suffix. Example:

```js
[
    'jquery',
    'underscore',
    'backbone'
]
```

#### options.verbose
Type: `Boolean`
Default value: `false`

Whether or not to output progress messages.

#### options.libPath
Type: `String`
Default value: `'lib/js'`

Path (relative to the location of the Gruntfile) where libraries can be found.

#### options.outPath
Type: `String`
Default value: `'public/js'`

Path (relative to the location of the Gruntfile) where generated bundles should be placed.

#### options.tmpPath
Type: `String`
Default value: `'tmp/js'`

Path (relative to the location of the Gruntfile) where temporary files should be written.

#### options.requirePrefix
Type: `String`
Default value: `''`

Prepend this value to the filenames. Set this if you have multiple bundles with clashing filenames.

#### options.initWith
Type: `String`
Default value: `undefined`

Require this file automatically when loading the bundle.

#### options.skipHeader
Type: `Boolean`
Default value: `false`

When set, the implementation of `require` will be omitted from the generated bundle. Use this if you plan to include multiple bundles on one page. Only the first one needs to carry an implementation of require.

### Usage Examples

#### Default Options
In this example, we simply compile a bundle named `app.bundle.min.js`, with all options set to their defaults.

```js
grunt.initConfig({
    client_compiler: {
        test: {} 
    }
});
```

#### Custom Options
You can override options by setting them in the options object.

```js
grunt.initConfig({
    client_compiler: {
        test: {
            options: {
                pack: ['jquery']
            }
        } 
    }
});
```

#### Multiple targets
Define multiple targets if you want to compile multiple bundles. Be sure to only include the header for the first bundle.

```js
grunt.initConfig({
    client_compiler: {
        // Global options are shared between all targets.
        options: {
            outPath: 'out'
        },

        core: {
            options: {
                pack: ['jquery']
            }
        }, 

        module: {
            options: {
                path: 'module-src',
                skipHeader: true
            }
        } 
    }
});
```

Not how you can share options among targets by specifying them globally.

## The "client_compiler_bundle" task

This task does the same as the `client_compiler` task, yet does not minify the code (and will thus be a lot faster).

Accepts the same options.

## The "client_compiler_min" task

Only performs the minification phase. Assumse that you have ran `client_compiler_bundle` before.

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History

* 2013-03-22   v0.1.0   Initial release.
