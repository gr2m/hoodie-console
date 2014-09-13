var AmpersandCollection = require('ampersand-collection');

var hoodieComandsTree = require('./helpers/hoodie-commands-tree');
var Suggestion = require('./suggestion');

var SuggestionCollection = AmpersandCollection.extend({
    model: Suggestion
});

SuggestionCollection.fetchForCommand = function(command, callback) {
    var methods, suggestions;
    var name = command.name.replace(/\.$/, '');
    var parts = name.split(/\./);
    var currentNode = hoodieComandsTree;

    try {
        parts.forEach(function(name) {
            if (! currentNode.api) return;
            currentNode = currentNode.api[name];
        });
        if (! currentNode.api) {
            return callback(null, new this([]));
        }
        methods = Object.keys(currentNode.api);
        suggestions = methods.map(function(methodName) {
            return {
                name: methodName,
                forCommand: command.name
            };
        });
    } catch(error) {
        return callback(error);
    }

    callback(null, new this(suggestions));
};


module.exports = SuggestionCollection;
