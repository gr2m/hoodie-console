var BaseView = require('../../../base-view');
var MainNavView = require('../../main-nav/view');
var ConsoleView = require('../../console/view');

module.exports = BaseView.extend({
    template: require('../template/index.dom'),
    autoRender: true,
    props: {
        isFullscreen: ['boolean', true, false]
    },
    derived: {
        cssClasses: {
            deps: ['isFullscreen'],
            fn: function() {
                var classes = [];
                if (this.isFullscreen) classes.push('fullscreen');
                return classes.join(' ');
            }
        }
    },
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
