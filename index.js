'use strict';

var isSymbol = require('is-symbol');
var callBound = require('call-bind/callBound');

/** @type {typeof Symbol.keyFor} */
var keyFor = callBound('Symbol.keyFor', true);
/** @type {(receiver: ThisParameterType<typeof Symbol.prototype.valueOf>, ...args: Parameters<typeof Symbol.prototype.valueOf>) => ReturnType<typeof Symbol.prototype.valueOf>} */
var symbolValueOf = callBound('Symbol.prototype.valueOf', true);

/** @type {import('.')} */
module.exports = function isRegisteredSymbol(sym) {
	if (!isSymbol(sym)) {
		return false;
	}
	return typeof keyFor(typeof sym === 'symbol' ? sym : symbolValueOf(sym)) === 'string';
};
