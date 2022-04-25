'use strict';

var test = require('tape');
var forEach = require('for-each');
var hasSymbols = require('has-symbols')();
var inspect = require('object-inspect');
var v = require('es-value-fixtures');

var isRegisteredSymbol = require('../');

test('isRegisteredSymbol', function (t) {
	t.equal(typeof isRegisteredSymbol, 'function', 'is a function');

	t.test('non-symbols', function (st) {
		forEach(v.nonSymbolPrimitives.concat(v.objects), function (nonSymbol) {
			st.equal(isRegisteredSymbol(nonSymbol), false, inspect(nonSymbol) + ' is not a Symbol');
		});

		st.end();
	});

	t.test('symbols', { skip: !hasSymbols }, function (st) {
		forEach(v.symbols, function (uniqueSymbol) {
			st.equal(
				isRegisteredSymbol(uniqueSymbol),
				false,
				inspect(uniqueSymbol) + ' is not a registered Symbol'
			);
		});

		forEach(v.strings, function (str) {
			var sym = Symbol['for'](str); // eslint-disable-line no-restricted-properties
			var obj = Object(sym);

			st.equal(
				isRegisteredSymbol(sym),
				true,
				inspect(sym) + ' is a registered Symbol'
			);
			st.equal(
				isRegisteredSymbol(obj),
				true,
				inspect(obj) + ' boxes ' + inspect(sym) + ', a registered Symbol'
			);
		});

		st.end();
	});

	t.end();
});
