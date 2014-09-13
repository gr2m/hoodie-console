var AmpersandModel = require('ampersand-model');
var hoodieComandsTree = require('./helpers/hoodie-commands-tree');
var SuggestionCollection = require('./suggestion-collection');

module.exports = AmpersandModel.extend({
    props: {
        name: ['string', true, ''],
        state: {
            type: 'string',
            values: [
                'done',
                'pending',
                'resolved',
                'rejected',
                'error'
            ]
        },
        result: 'any',
        calledAt: 'date',
        settledAt: 'date',
        threw: 'boolean'
    },
    derived: {
        isRoot: {
            deps: ['name'],
            fn: function() {
                return /^hoodie\.?$/.test(this.name);
            }
        },
        isExecutable: {
            deps: ['name'],
            fn: function() {
                return /\)$/.test(this.name);
            }
        }
    },

    fetchMethods: function(callback) {
        return SuggestionCollection.fetchForCommand(this, callback);
    },

    fetchDocumentation: function(callback) {
        var name = this.name.replace(/\.$/, '');
        var parts = name.split(/\./);
        var currentNode = hoodieComandsTree;

        try {
            parts.forEach(function(name) {
                if (! currentNode.api) return;
                currentNode = currentNode.api[name];
            });
            callback(null, currentNode.doc);
        } catch(error) {
            callback(error);
        }
    }
});
