module.exports = function(grunt){

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    mocha_casperjs: {
      options: {
        timeout: 5000,
        color: false
      },
      files: {
        src: ['test/**/*']
      }
    },
    jshint: {
      src: ['src/*.js']
    },watch: {
      scripts: {
        files: ['src/*.js'],
        tasks: ['jshint']
      }
    }
  });

  grunt.loadNpmTasks('grunt-mocha-casperjs');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['mocha_casperjs', 'jshint']);

};
