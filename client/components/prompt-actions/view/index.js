var BaseView = require('../../../base-view');

module.exports = BaseView.extend({
    template: require('../template/index.dom'),
    events: {
        'click [data-action=cancel]': 'handleCancel',
        'click [data-action=back]': 'back',
        'click [data-action=run]': 'runCommand'
    },
    initialize: function() {
        this.listenTo(app.command, 'change:name', this.render);
    },

    handleCancel: function handleCancel(event) {
        event.preventDefault();
        app.command.name = 'hoodie.';
        this.trigger('prompt:close');
    },
    back: function runCommand(event) {
        event.preventDefault();
        var commandName = app.command.name.replace(/\..+$/, '');
        app.command.name = commandName;
    },
    runCommand: function runCommand(event) {
        event.preventDefault();
        window.alert('RUN!');
    }
});
