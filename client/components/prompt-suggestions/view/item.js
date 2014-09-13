var BaseView = require('../../../base-view');

var ItemView = BaseView.extend({
    template: require('../template/item.dom'),
    events: {
        'click .name': 'handleSelect'
    },
    render: function() {
        var self = this;
        this.renderWithTemplate(this);

        this.model.fetchMethods(function(error, suggestions) {
            self.renderCollection(suggestions, ItemView, self.queryByHook('subtasks'));
        });
        return this;
    },

    handleSelect: function handleSelect(event) {
        var commandName;
        event.preventDefault();

        commandName = event.target.dataset.command;
        app.command.name = commandName;
    }
});

module.exports = ItemView;
