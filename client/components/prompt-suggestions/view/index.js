var BaseView = require('../../../base-view');
var ItemView = require('./item');
var AmpersandCollection = require('ampersand-collection');

module.exports = BaseView.extend({
    template: require('../template/index.dom'),
    initialize: function() {
        this.listenTo(app.command, 'change:name', this.render);
    },
    render: function() {
        var self = this;
        this.renderWithTemplate(this);

        this.model.fetchMethods(function(error, suggestions) {
            self.renderCollection(suggestions, ItemView, self.queryByHook('suggestions'));
        });
        return this;
    }
});
