Toast
===========

[![Version](https://img.shields.io/npm/v/toast-xu.svg)](https://www.npmjs.com/package/toast-xu)

A simple JavaScript toast for web.

Install with [npm](https://www.npmjs.com/), [Bower](https://bower.io/), or [Yarn](https://yarnpkg.com/):

npm:
```sh
npm install toast-xu --save
```

Bower:
```sh
bower install toast-xu --save
```

Yarn (note that `yarn add` automatically saves the package to the `dependencies` in `package.json`):
```sh
yarn add toast-xu
```

Use with [Node.js](https://nodejs.org/en/), [Browserify](http://browserify.org/), or [webpack](https://webpack.github.io/):

```js
const Toast = require('toast-xu');
let toast = new Toast('hello world!');
toast.show();
setTimeout(()=>{
  toast.hide();
}, 2000);
```

## License

[MIT](LICENSE). Copyright (c) 2018 Xu Tongbao.
