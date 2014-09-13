Hoodie Console
==============

> Still cooking.

[![Build Status](https://travis-ci.org/hoodiehq/hoodie-console.svg)](https://travis-ci.org/hoodiehq/hoodie-console)
[![Dependency Status](https://david-dm.org/hoodiehq/hoodie-console.svg)](https://david-dm.org/hoodiehq/hoodie-console)
[![devDependency Status](https://david-dm.org/hoodiehq/hoodie-console/dev-status.svg)](https://david-dm.org/hoodiehq/hoodie-console#info=devDependencies)

---


## Setup

```
git clone git@github.com:gr2m/hoodie-console.git
cd hoodie-console
npm install
```

To start the server

```
grunt serve
```

This will start the server at http://0.0.0.0:9000


## Help wanted

- Ampersand / moonboots / Hoodie setup
  is a mess. It works, but:

  1. It starts the hoodie server as process fork
  2. It starts the moonboots server as process fork
  3. It starts a connect server the proxys /_api to 1. and the rest to 2.

  Also, I inject `<script src="/_api/_files/hoodie.js"` currently in
  `client/index.js`, moonboots does not support to add loading scripts
  from external resources, at least I don't know how.


## License

Copyright (c) Gregor Martynus
Licensed under the MIT license
