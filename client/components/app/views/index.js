var View = require('ampersand-view');
var MainNavView = require('../../main-nav/views');
var ConsoleView = require('../../console/views');


module.exports = View.extend({
    template: require('../templates/index.dom'),
    autoRender: true,

    subviews: {
      nav: {
        container: 'body > nav',
        waitFor: 'model',
        constructor: MainNavView,
        prepareView: function (el) {
            return new this.subviews.nav.constructor({
                el: el,
                parent: this,
                model: this.model,
                collection: this.collection
            });
        }
      },
      main: {
        container: 'body > main',
        waitFor: 'model',
        constructor: ConsoleView,
        prepareView: function (el) {
            return new this.subviews.main.constructor({
                el: el,
                parent: this,
                model: this.model,
                collection: this.collection
            });
        }
      }
    },
});
