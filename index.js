'use strict';

var isSymbol = require('is-symbol');
var callBound = require('call-bound');

/** @type {undefined | typeof Symbol.keyFor} */
var keyFor = callBound('Symbol.keyFor', true);
/** @type {undefined | ((receiver: ThisParameterType<typeof Symbol.prototype.valueOf>, ...args: Parameters<typeof Symbol.prototype.valueOf>) => ReturnType<typeof Symbol.prototype.valueOf>)} */
var symbolValueOf = callBound('Symbol.prototype.valueOf', true);

/** @type {import('.')} */
module.exports = function isRegisteredSymbol(sym) {
	if (!isSymbol(sym)) {
		return false;
	}
	// eslint-disable-next-line no-extra-parens
	return typeof /** @type {NonNullable<typeof keyFor>} */ (keyFor)(typeof sym === 'symbol'
		? sym
		// eslint-disable-next-line no-extra-parens
		: /** @type {NonNullable<typeof symbolValueOf>} */ (symbolValueOf)(sym)) === 'string';
};
