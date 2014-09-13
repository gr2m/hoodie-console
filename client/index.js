/* global Hoodie */
var moment = require('moment');

var Command = require('./models/command');
var CommandCollection = require('./models/command-collection');
var AppView = require('./components/app/view');

var app = window.app = {};

// FIXME: surely not the most elegant way to load Hoodie here.
var hoodieBundle = document.createElement('script');
hoodieBundle.setAttribute('src','/_api/_files/hoodie.js');
hoodieBundle.onload = startApp;
document.head.appendChild(hoodieBundle);

function startApp() {
    app.hoodie = new Hoodie();

    app.command = new Command({name: 'hoodie.'});

    // bootstrap with data
    app.commands = new CommandCollection([{
        name: 'hoodie.account.signUp("foo", "bar")',
        result: 'foo',
        calledAt: moment().subtract(1, 'minute').toDate(),
        settledAt: moment().subtract(1, 'minute').add(20, 'seconds').toDate(),
        state: 'resolved'
    },{
        name: 'hoodie.store.findAll()',
        result: '[]',
        calledAt: moment().subtract(2, 'minutes').toDate(),
        settledAt: moment().subtract(2, 'minutes').add(10, 'seconds').toDate(),
        state: 'resolved'
    },{
        name: 'hoodie.id()',
        result: 'abc4567',
        calledAt: moment().subtract(3, 'minutes').toDate(),
        state: 'done'
    }]);

    app.view = new AppView({
        el: document.body,
        model: app.command,
        collection: app.commands
    });
}
