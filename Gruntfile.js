module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-semantic-release');
  grunt.loadNpmTasks('grunt-hoodie');
  grunt.loadNpmTasks('grunt-connect-proxy');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.initConfig({
    watch: {},

    hoodie: {
      start: {
        options: {
          callback: function (config) {
            grunt.config.set('cfg', config);
          }
        }
      }
    },

    connect: {
      server: {
        options: {
          port: 9000,
          base: 'www/',
          hostname: '0.0.0.0',
          middleware: function () {
            var proxy = require('grunt-connect-proxy/lib/utils').proxyRequest;
            return [
              proxy
            ];
          }
        },
        proxies: [
          {
            context: '/_api',
            host: '<%= cfg.stack.www.host %>',
            port: '<%= cfg.stack.www.port %>'
          },
          {
            context: '/',
            host: '0.0.0.0',
            port: '9001'
          }
        ]
      }
    },

    release: {
      email: 'gregor@martynus.net',
      name: 'Gregor Martynus'
    }
  });

  grunt.registerTask('moonboots', 'Starts moonboots server.', function () {
    var fork = require('child_process').fork;

    var child = fork('server.js', [], {});
    child.name = 'hoodie (pid: ' + child.pid + ')';

    child.once('message', function () {
      grunt.log.ok(child.name + ' is ready!');
    });

    child.on('error', function (err) {
      grunt.log.error(err);
    });
    child.once('exit', function (code, signal) {
      grunt.log.warn(child.name + ' exited. Code: ' + code + ' / Signal: ' + signal);
    });
    if (child.stderr) {
      child.stderr.on('data', function (buf) {
        grunt.log.error(buf);
      });
    }
  });

  grunt.registerTask('serve', [
    'hoodie',
    'moonboots',
    'connect:server',
    'configureProxies:server',
    'watch'
  ]);
};
