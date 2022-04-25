'use strict';

var isSymbol = require('is-symbol');
var callBound = require('call-bind/callBound');

var keyFor = callBound('Symbol.keyFor', true);
var symbolValueOf = callBound('Symbol.prototype.valueOf', true);

module.exports = function isRegisteredSymbol(sym) {
	if (!isSymbol(sym)) {
		return false;
	}
	return typeof keyFor(typeof sym === 'symbol' ? sym : symbolValueOf(sym)) === 'string';
};
