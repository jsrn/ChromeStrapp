module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        sass: {
            main: {
                options: {
                    style: 'compressed'
                },
                files: {
                    'css/main.css': 'css/scss/main.scss'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');

    grunt.registerTask('default', [
        'sass'
    ]);
};