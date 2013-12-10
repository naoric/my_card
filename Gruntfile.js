module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    less: {
      dev: {
        options: {
          paths: ["www/css/less/"],
          compress: false
        },
        files: {
          "www/css/redigo.css": "www/css/redigo.less"
        }
      },
      min: {
        options: {
          paths: ['www/css/less/'],
          compress: true
        },
        files: {
          "www/css/min/redigo.min.css": "www/css/less/redigo.less"
        }
      }
    },
    sass: {
      node: {
        options: {
          loadPath: ["www/css"],
          style: 'compressed'
        },
        files: [{
          expand: true,
          cwd: 'www/',
          src: ['css/*.sass'],
          dest: 'www/css/min',
          ext: '.min.css'
        }]
      }
    },
    stylus: {
      node: {
        options: {
          paths: ["www/css"],
          compile: true
        },
        files: [{
          expand: true,
          cwd: 'www/',
          src: ['css/*.styl'],
          dest: 'www/css/min/',
          ext: '.min.css'
        }]
      }
    },
    watch: {
      files: "www/css/*.less",
      tasks: ["less"]
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-stylus');
  grunt.loadNpmTasks('grunt-install-dependencies');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['less:node', 'less:dev']);
};
