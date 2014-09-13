module.exports = {
    api: {
        hoodie: {
            returns: 'global hoodie API',
            doc: '<code>window.hoodie</code> becomes available, once the JavaScript bundle has been loaded from the Hoodie Server. It provides ...',
            api: {
                'account': {
                    doc: 'say something here',
                    api: {
                        'signUp(username, password)': {
                            returns: 'promise',
                            doc: 'sign up and stuff',
                            arguments: [
                                {name: 'username', type: 'string', required: true},
                                {name: 'password', type: 'string', required: true}
                            ]
                        },
                        'signIn(username, password)': {
                            returns: 'promise',
                            doc: 'sign ind and stuff',
                            arguments: [
                                {name: 'username', type: 'string', required: true},
                                {name: 'password', type: 'string', required: true}
                            ]
                        },
                        'signOut()': {
                            returns: 'promise',
                            doc: 'sign out and stuff'
                        },
                    }
                },
                'store': {
                    returns: 'hoodie.store API',
                    doc: 'say something here about <code>hoodie.store</code>',
                    api: {
                        'add(type, properties)': {
                            returns: 'promise',
                            doc: 'adds a new object to the user\'s store',
                            arguments: [
                                {name: 'type', type: 'string', required: true},
                                {name: 'properties', type: 'object', required: true}
                            ]
                        },
                        'find(type, id)': {
                            returns: 'promise',
                            doc: 'finds an object in user\'s store',
                            arguments: [
                                {name: 'type', type: 'string', required: true},
                                {name: 'id', type: 'string', required: true}
                            ]
                        },
                        'find(type, id, changedProperties)': {
                            returns: 'promise',
                            doc: 'updates an object in user\'s store',
                            arguments: [
                                {name: 'type', type: 'string', required: true},
                                {name: 'id', type: 'string', required: true},
                                {name: 'changedProperties', type: 'object', required: true}
                            ]
                        }
                    }
                },
                'store(type)': {},
                'id()': {
                    returns: 'user\'s unique user id',
                    doc: '<code>hoodie.id()</code> gets generated on first page load and persists until local data gets cleared or the user signs out. <code>hoodie.id()</code> gets added to every object the user creates as <code>createdBy</code> property',
                }
            }
        }
    }
};
