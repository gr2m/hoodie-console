var BaseView = require('../../../base-view');
var ItemView = require('./item');

module.exports = BaseView.extend({
    template: require('../template/index.dom'),
    render: function() {
        this.renderWithTemplate(this);
        this.renderCollection(this.collection, ItemView, this.queryByHook('commands'));
        return this;
    }
});
