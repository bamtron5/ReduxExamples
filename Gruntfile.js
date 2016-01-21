'use strict';

module.exports = function (grunt) {
  require("load-grunt-tasks")(grunt);
  grunt.initConfig({
    babel: {
      compile: {
        src: 'index.js',
        dest: 'dist/App.built.js'
      }
    }
  });

  grunt.registerTask('default', ['babel']);
};