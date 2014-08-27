module.exports = function(grunt) {
  grunt.initConfig({
    sass: {
      dist: {
        files: {
          'stylesheets/app.css': 'sass/app.sass',
          'stylesheets/other-app.css': 'sass/app.scss'
        }
      }
    },
    watch: {
      sass: {
        files: ['sass/**/*.sass', 'sass/**/*.scss'],
        tasks: ['sass']
      },
      livereload: {
        files: ['stylesheets/*.css'],
        options: {
          livereload: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.registerTask('default', ['sass']);
};


