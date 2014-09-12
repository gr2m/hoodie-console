var View = require('ampersand-view');

module.exports = View.extend({
    template: require('../templates/item.dom'),
    bindings: {
        'model.name': {
            type: 'text',
            hook: 'command'
        }
    }
});
