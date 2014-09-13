var AmpersandModel = require('ampersand-model');

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
    }
});
