var AmpersandCollection = require('ampersand-collection');
var Command = require('./command');

module.exports = AmpersandCollection.extend({
    model: Command
});
