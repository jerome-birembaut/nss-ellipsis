
[![npm version](https://badge.fury.io/js/nss-ellipsis.svg)](https://badge.fury.io/js/nss-ellipsis)

With NSS-Ellipsis you can add ellipsis to multiline text 


### Setup ###


NSS-Ellipsis can be installed with [npm](https://docs.npmjs.com/getting-started/what-is-npm) or simply using a content delivery network (CDN) URL to embed NSS-Ellipsis directly on your HTML page.

#### NPM Install

```sh
npm install nss-ellipsis
```
The correct way to import NSS-Ellipsis is:

```js
import NSSEllipsis from 'nss-ellipsis'
NSSEllipsis.update(element, 3)
```

Using common file:
```js
<script async src="../dist/nss-ellipsis.common.js"></script>
```
#### Latest Release can be downloaded here

```html
https://github.com/jerome-birembaut/nss-ellipsis/releases/tag/0.0.1
```

### Current features ###

- ellipsis a dom element

### Basic Usage Example ###

```js
const element = document.getElementById(id)
const lineMax = 3
NSSEllipsis.update(element, lineMax)
```
```js
// it's Responsive Baby!!!
const lineMax = 2;
const onResize = function() {
  [...document.querySelectorAll(".to-ellipsis")].map(element => {
    NSSEllipsis.update(element, 3)
  })
}
window.addEventListener('resize', onResize)
onResize()
```

#### BUILD API

```
npm install
npm run build
```

### License ###

This content is released under the (http://opensource.org/licenses/MIT) MIT License.
