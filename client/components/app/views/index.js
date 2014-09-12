var View = require('ampersand-view');

var ConsoleView = require('../../console/views');
var LogView = require('../../log/views');

module.exports = View.extend({
    template: require('../templates/index.dom'),
    autoRender: true,

    subviews: {
      input: {
        hook: 'console',
        waitFor: 'model',
        constructor: ConsoleView,
        prepareView: function (el) {
            return new this.subviews.input.constructor({
                el: el,
                parent: this,
                model: this.model
            });
        }
      },
      log: {
        hook: 'log',
        waitFor: 'collection',
        constructor: LogView,
        prepareView: function (el) {
            return new this.subviews.log.constructor({
                el: el,
                parent: this,
                collection: this.collection
            });
        }
      }
    },
});
