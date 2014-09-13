var BaseView = require('../../../base-view');

var DocView = require('../../prompt-doc/view');
var SuggestionsView = require('../../prompt-suggestions/view');
var ActionsView = require('../../prompt-actions/view');

module.exports = BaseView.extend({
    template: require('../template/index.dom'),
    events: {
        'focus .command': 'handleFocus'
    },
    props: {
        hasFocus: ['boolean', true, false]
    },
    subviews: {
        doc: {
            hook: 'doc',
            waitFor: 'hasFocus',
            constructor: DocView,
            prepareView: function (el) {
              return new this.subviews.doc.constructor({
                  el: el,
                  parent: this,
                  model: this.model,
                  collection: this.collection
              });
          }
        },
        suggestions: {
            hook: 'suggestions',
            waitFor: 'hasFocus',
            constructor: SuggestionsView,
            prepareView: function (el) {
              return new this.subviews.suggestions.constructor({
                  el: el,
                  parent: this,
                  model: this.model,
                  collection: this.collection
              });
          }
        },
        actions: {
            hook: 'actions',
            waitFor: 'hasFocus',
            constructor: ActionsView,
            prepareView: function (el) {
              var view = new this.subviews.actions.constructor({
                  el: el,
                  parent: this,
                  model: this.model,
                  collection: this.collection
              });
              this.listenTo(view, 'prompt:close', this.handleBlur.bind(this));
              return view;
          }
        }
    },

    handleFocus: function() {
        app.view.isFullscreen = true;
        this.hasFocus = true;
    },

    handleBlur: function() {
        app.view.isFullscreen = false;
        this.hasFocus = false;
    }
});
