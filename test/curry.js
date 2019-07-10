const assert = require('assert');
var Rf = require('../dist/cjs');
var eq = assert.deepEqual.bind(assert)

describe('curry', function() {
  it('curries a single value', function() {
    var f = I.curry(function(a, b, c, d) {return (a + b * c) / d;}); // f(12, 3, 6, 2) == 15
    var g = f(12);
    eq(g(3, 6, 2), 15);
  });

  it('curries multiple values', function() {
    var f = I.curry(function(a, b, c, d) {return (a + b * c) / d;}); // f(12, 3, 6, 2) == 15
    var g = f(12, 3);
    eq(g(6, 2), 15);
    var h = f(12, 3, 6);
    eq(h(2), 15);
  });

  it('allows further currying of a curried function', function() {
    var f = I.curry(function(a, b, c, d) {return (a + b * c) / d;}); // f(12, 3, 6, 2) == 15
    var g = f(12);
    eq(g(3, 6, 2), 15);
    var h = g(3);
    eq(h(6, 2), 15);
    eq(g(3, 6)(2), 15);
  });

  it('no extra arguments', function() {
    var f = function(a, b, c) {
      void c;
      return Array.prototype.slice.call(arguments);
    };
    var g = I.curry(f);

    eq(g(1, 2, 3), [1, 2, 3]);
    eq(g(1, 2, 3, 4), [1, 2, 3]);
    eq(g(1, 2)(3, 4), [1, 2, 3]);
    eq(g(1)(2, 3, 4), [1, 2, 3]);
    eq(g(1)(2)(3, 4), [1, 2, 3]);
  });
});
