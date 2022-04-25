# is-registered-symbol <sup>[![Version Badge][npm-version-svg]][package-url]</sup>

[![github actions][actions-image]][actions-url]
[![coverage][codecov-image]][codecov-url]
[![dependency status][deps-svg]][deps-url]
[![dev dependency status][dev-deps-svg]][dev-deps-url]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]

[![npm badge][npm-badge-png]][package-url]

Is this value a Symbol stored in the global cross-realm `Symbol` registry?

## Example

```js
var isRegisteredSymbol = require('is-registered-symbol');

var assert = require('assert');

assert(!isRegisteredSymbol(null));
assert(!isRegisteredSymbol(undefined));
assert(!isRegisteredSymbol('foo'));
assert(!isRegisteredSymbol(Symbol.iterator));
assert(!isRegisteredSymbol(Symbol()));
assert(isRegisteredSymbol(Symbol.for('yogurt')));
```

## Tests
Simply clone the repo, `npm install`, and run `npm test`

[package-url]: https://npmjs.org/package/is-registered-symbol
[npm-version-svg]: https://versionbadg.es/inspect-js/is-registered-symbol.svg
[deps-svg]: https://david-dm.org/inspect-js/is-registered-symbol.svg
[deps-url]: https://david-dm.org/inspect-js/is-registered-symbol
[dev-deps-svg]: https://david-dm.org/inspect-js/is-registered-symbol/dev-status.svg
[dev-deps-url]: https://david-dm.org/inspect-js/is-registered-symbol#info=devDependencies
[npm-badge-png]: https://nodei.co/npm/is-registered-symbol.png?downloads=true&stars=true
[license-image]: https://img.shields.io/npm/l/is-registered-symbol.svg
[license-url]: LICENSE
[downloads-image]: https://img.shields.io/npm/dm/is-registered-symbol.svg
[downloads-url]: https://npm-stat.com/charts.html?package=is-registered-symbol
[codecov-image]: https://codecov.io/gh/inspect-js/is-registered-symbol/branch/main/graphs/badge.svg
[codecov-url]: https://app.codecov.io/gh/inspect-js/is-registered-symbol/
[actions-image]: https://img.shields.io/endpoint?url=https://github-actions-badge-u3jn4tfpocch.runkit.sh/inspect-js/is-registered-symbol
[actions-url]: https://github.com/inspect-js/is-registered-symbol/actions
