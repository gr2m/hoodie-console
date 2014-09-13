var BaseView = require('../../../base-view');

var PromptView = require('../../prompt/view');
var LogView = require('../../log/view');

module.exports = BaseView.extend({
    template: require('../template/index.dom'),
    subviews: {
      input: {
        hook: 'prompt',
        waitFor: 'model',
        constructor: PromptView,
        prepareView: function (el) {
            var view = new this.subviews.input.constructor({
                el: el,
                parent: this,
                model: this.model,
                collection: this.collection
            });
            view.on('change:hasFocus', this.handlePromptFocus.bind(this));
            return view;
        }
      },
      log: {
        hook: 'log',
        prepareView: function (el) {
            var view = new LogView({
                el: el,
                parent: this,
                collection: this.collection,
                model: this.model
            });
            return view;
        }
      }
    },

    handlePromptFocus: function(promptView, hasFocus) {
        var toggleMethod = hasFocus ? 'add' : 'remove';
        this.el.classList[toggleMethod]('prompt-has-focus');

    }
});
