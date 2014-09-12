var View = require('ampersand-view');
var ItemView = require('./item');

module.exports = View.extend({
    template: require('../templates/index.dom'),
    render: function() {
        this.renderWithTemplate(this);
        this.renderCollection(this.collection, ItemView, this.queryByHook('commands'));
        return this;
    }
});
