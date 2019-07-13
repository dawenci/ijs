const I = require('../dist/cjs')
const R = require('ramda')
const _ = require('lodash')

function mult(x, y) { return x * y; }

var I_mult = I.curry(mult)
var R_mult = R.curry(mult)
var _mult = _.curry(mult)


var I_mult4 = I.curry(mult)(4)
var R_mult4 = R.curry(mult)(4)
var _mult4 = _.curry(mult)(4)

function manmult(x) {
  return function(y) {
    return x * y;
  };
}
var manual = manmult(4);


module.exports = {
  name: 'curry',
  tests: {
    'I:mult(4)(100)': function() {
      I_mult(4)(100);
    },
    'R:mult(4)(100)': function() {
      R_mult(4)(100);
    },
    '_:mult(4)(100)': function() {
      _mult(4)(100);
    },

    'I:mult4(100)': function() {
      I_mult4(100);
    },
    'R:mult4(100)': function() {
      R_mult4(100);
    },
    '_:mult4(100)': function() {
      _mult4(100);
    },
    'manual:mult4(100)': function() {
      manual(100);
    },

    'I': function() {
      const test1 = (I.curry((a) => a))
      const test2 = (I.curry((a, b) => a + b))
      const test3 = (I.curry((a, b, c) => a + b + c))
      const test4 = (I.curry((a, b, c, d) => a + b + c + d))
      const test5 = (I.curry((a, b, c, d, e) => a + b + c + d + e))
      test1(1)
      test2(1, 2)
      test2(1)(2)
      test3(1, 2, 3)
      test3(1, 2)(3)
      test3(1)(2, 3)
      test3(1)(2)(3)
      test4(1, 2, 3, 4)
      test4(1, 2, 3)(4)
      test4(1, 2)(3, 4)
      test4(1)(2, 3, 4)
      test4(1)(2)(3, 4)
      test4(1, 2)(3)(4)
      test4(1)(2)(3)(4)
      test5(1, 2, 3, 4, 5)
      test5(1, 2, 3, 4)(5)
      test5(1, 2, 3)(4, 5)
      test5(1, 2)(3, 4, 5)
      test5(1)(2, 3, 4, 5)
      test5(1, 2)(3)(4)(5)
      test5(1, 2)(3, 4)(5)
      test5(1)(2)(3)(4)(5)
    },

    'R': function() {
      const test1 = (R.curry((a) => a))
      const test2 = (R.curry((a, b) => a + b))
      const test3 = (R.curry((a, b, c) => a + b + c))
      const test4 = (R.curry((a, b, c, d) => a + b + c + d))
      const test5 = (R.curry((a, b, c, d, e) => a + b + c + d + e))
      test1(1)
      test2(1, 2)
      test2(1)(2)
      test3(1, 2, 3)
      test3(1, 2)(3)
      test3(1)(2, 3)
      test3(1)(2)(3)
      test4(1, 2, 3, 4)
      test4(1, 2, 3)(4)
      test4(1, 2)(3, 4)
      test4(1)(2, 3, 4)
      test4(1)(2)(3, 4)
      test4(1, 2)(3)(4)
      test4(1)(2)(3)(4)
      test5(1, 2, 3, 4, 5)
      test5(1, 2, 3, 4)(5)
      test5(1, 2, 3)(4, 5)
      test5(1, 2)(3, 4, 5)
      test5(1)(2, 3, 4, 5)
      test5(1, 2)(3)(4)(5)
      test5(1, 2)(3, 4)(5)
      test5(1)(2)(3)(4)(5)
    },

    '_': function() {
      const test1 = (_.curry((a) => a))
      const test2 = (_.curry((a, b) => a + b))
      const test3 = (_.curry((a, b, c) => a + b + c))
      const test4 = (_.curry((a, b, c, d) => a + b + c + d))
      const test5 = (_.curry((a, b, c, d, e) => a + b + c + d + e))
      test1(1)
      test2(1, 2)
      test2(1)(2)
      test3(1, 2, 3)
      test3(1, 2)(3)
      test3(1)(2, 3)
      test3(1)(2)(3)
      test4(1, 2, 3, 4)
      test4(1, 2, 3)(4)
      test4(1, 2)(3, 4)
      test4(1)(2, 3, 4)
      test4(1)(2)(3, 4)
      test4(1, 2)(3)(4)
      test4(1)(2)(3)(4)
      test5(1, 2, 3, 4, 5)
      test5(1, 2, 3, 4)(5)
      test5(1, 2, 3)(4, 5)
      test5(1, 2)(3, 4, 5)
      test5(1)(2, 3, 4, 5)
      test5(1, 2)(3)(4)(5)
      test5(1, 2)(3, 4)(5)
      test5(1)(2)(3)(4)(5)
    },

  }
};
