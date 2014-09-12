var domready = require('domready');

var Command = require('./models/command');
var CommandCollection = require('./models/command-collection');
var AppView = require('./components/app/views');

var app = window.app = {};
domready(function () {
    app.command = new Command({name: 'hoodie.'});
    app.commands = new CommandCollection([{
        name: 'hoodie.account.signUp("foo", "bar")'
    },{
        name: 'hoodie.store.findAll()'
    },{
        name: 'hoodie.id()'
    }]);
    new AppView({
        el: document.body,
        model: app.command,
        collection: app.commands
    });
});
