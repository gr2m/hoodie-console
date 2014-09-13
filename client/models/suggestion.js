var AmpersandModel = require('ampersand-model');

module.exports = AmpersandModel.extend({
    type: 'suggestion',
    props: {
        name: ['string', true, ''],
        forCommand: ['string', true, '']
    },
    derived: {
        fullCommand: {
            deps: ['name', 'forCommand'],
            fn: function() {
                var command = this.forCommand.replace(/\.$/, '');
                return command + '.' + this.name;
            }
        }
    },
    toCommand: function() {
        var Command = require('./command');
        return new Command({name: this.fullCommand});
    },
    fetchMethods: function(callback) {
        return this.collection.constructor.fetchForCommand(this.toCommand(), callback);
    }
});
