var hapi = require('hapi');
var server = hapi.createServer(8080, 'localhost');
var moonboots = require('moonboots_hapi');
var stylizer = require('stylizer');

server.pack.register({
    plugin: moonboots,
    options: {
        appPath: '/{p*}',
        moonboots: {
            main: __dirname + '/client/index.js',
            developmentMode: true,
            stylesheets: [
                __dirname + '/public/app.css'
            ],
            browserify: {
                transforms: [ 'domthingify' ]
            },
            beforeBuildJS: function () {

            },
            beforeBuildCSS: function (done) {
              stylizer({
                  infile: __dirname + '/client/style/index.styl',
                  outfile: __dirname + '/public/app.css',
                  development: true,
                  watch: __dirname + '/client/style/**/*.styl'
              }, done);
            }
        }
    }
}, function () {
    server.start();
    console.log('app is running at 8080');
});
