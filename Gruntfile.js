module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-mocha-test');
  grunt.loadNpmTasks('grunt-babel');

  grunt.initConfig({
    babel: {
      compile: {
        options: {
          sourceMap: true,
          presets: ['es2015']
        },
        files: [{
          expand: true,
          cwd: 'src/',
          src: ['*.js'],
          dest: 'build',
          ext: '.js'
        }]
      }
    },
    mochaTest: {
      test: {
        options: {
          reporter: 'spec',
          quiet: false, // Optionally suppress output to standard out (defaults to false)
          clearRequireCache: false, // Optionally clear the require cache before running tests (defaults to false)
          noFail: false // Optionally set to not fail on failed tests (will still fail on other errors)
        },
        src: ['test/index.js']
      }
    }
  });

  grunt.registerTask('default', ['babel']);

};
