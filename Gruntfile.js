module.exports = function(grunt) {
	grunt.initConfig({
		pkg : grunt.file.readJSON('package.json'),
		less : {
			dev : {
				options : {
					paths : ["www/css"],
					compress : false
				},
				files : {
					"www/css/redigo.css" : "www/css/redigo.less"
				}
			},
			node : {
				options : {
					paths : ['www/css'],
					compress : true
				},
				files : {
					"www/css/min/*.min.css" : "www/css/*.less"
				}
			}
		},
		watch : {
			files : "www/css/*.less",
			tasks : ["less"]
		}
	});

	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-install-dependencies');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['less:node', 'less:dev']);
};
