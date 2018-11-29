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

## Examples

Hello World!:
```js
let myToast = new Toast('hello world!');
myToast.show();
```

New Hello World!:
```js
let myToast = new Toast('hello world!');
myToast.show('new hello world!');
```

setTimeout:
```js
let myToast = new Toast();
myToast.show('new hello world!');
setTimeout(function () {
	myToast.hide();
}, 2000);
```

destory():
```js
let myToast = new Toast();
myToast.show('new hello world!');
setTimeout(function () {
	myToast.destory();
}, 2000);
```

custom style:
```js
let myToast = new Toast({
	text: 'hello world!',
	class: {
		toast: 'm-toast',
		toastInner: 'm-toast-inner',
		toastText: 'm-toast-text'
	}
});

myToast.show();
```

## License

[MIT](LICENSE). Copyright (c) 2018 Xu Tongbao.
