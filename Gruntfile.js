module.exports = function(grunt) {
  grunt.initConfig({
    // Configuration
      htmlmin: {
        docs: {
          options: {
            collapseWhitespace: true,
            conservativeCollapse: true
          },
          files: [
            {
              expand: true,     // Enable dynamic expansion.
              cwd: '',      // Src matches are relative to this path.
              src: ['**/*.html'], // Actual pattern(s) to match.
              dest: 'docs/',   // Destination path prefix.
              ext: '.html',   // Dest filepaths will have this extension.
              extDot: 'first'   // Extensions in filenames begin after the first dot
            }
          ]
        }
      },
      cssmin: {
        docs: {
          files: [
            {
              expand: true,     // Enable dynamic expansion.
              cwd: 'css/',      // Src matches are relative to this path.
              src: ['**/*.css'], // Actual pattern(s) to match.
              dest: 'docs/css/',   // Destination path prefix.
              ext: '.css',   // Dest filepaths will have this extension.
              extDot: 'first'   // Extensions in filenames begin after the first dot
            }
          ]
        }
      },
      babel: {
        docs: {
          files: [
            {
              expand: true,     // Enable dynamic expansion.
              cwd: 'js/',      // Src matches are relative to this path.
              src: ['**/*.js'], // Actual pattern(s) to match.
              dest: 'docs/js/',   // Destination path prefix.
              ext: '.js',   // Dest filepaths will have this extension.
              extDot: 'first'   // Extensions in filenames begin after the first dot
            }
          ]
        }
      },
      uglify: {
        options: {
          manage: false,
          output: {
            comments: 'all'
          }
        },
        docs: {
          files: [
            {
              expand: true,
              cwd: 'docs/js',
              src: '**/*.js',
              dest: 'docs/js'
            }
          ]
        }
      },
      // does not work at the moment
      copy: {
        files: [
          {src: 'lib/de.js', dest: 'docs/lib/de.js'},
          {src: 'lib/gcal.min.js', dest: 'docs/lib/gcal.min.js'},
          {src: 'lib/moment.min.js', dest: 'docs/lib/moment.min.js'}
        ]
      }
  });

  // Load plugins
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-babel');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Register Tasks
  grunt.registerTask('minifyHTML', ['htmlmin']);
  grunt.registerTask('minifyCSS', ['cssmin']);
  grunt.registerTask('transpileES6', ['babel']);
  grunt.registerTask('uglifyJS', ['uglify']);
  grunt.registerTask('copyFILES', ['copy']);
  grunt.registerTask('default', ['htmlmin', 'cssmin', 'babel', 'copy']);
};
