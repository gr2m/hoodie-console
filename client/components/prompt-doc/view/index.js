var BaseView = require('../../../base-view');

module.exports = BaseView.extend({
    template: require('../template/index.dom'),
    props: {
        'content': 'string'
    },
    initialize: function () {
        this.listenTo(app.command, 'change:name', this.render);
    },
    render: function() {
        var self = this;
        this.renderWithTemplate(this);
        this.model.fetchDocumentation(function(error, doc) {
            self.content = doc || '<em>no doccurrentNode.doc</em>'
        });

        return this;
    }
});
