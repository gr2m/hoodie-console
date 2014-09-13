var View = require('ampersand-view');

var PromptView = require('../../prompt/views');
var LogView = require('../../log/views');

module.exports = View.extend({
    template: require('../templates/index.dom'),
    subviews: {
      input: {
        hook: 'prompt',
        waitFor: 'model',
        constructor: PromptView,
        prepareView: function (el) {
            return new this.subviews.input.constructor({
                el: el,
                parent: this,
                model: this.model,
                collection: this.collection
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
                collection: this.collection,
                model: this.model,
                collection: this.collection
            });
        }
      }
    },
});
