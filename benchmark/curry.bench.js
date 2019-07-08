const Rf = require('../dist/cjs')
const R = require('ramda')
function RambdaCurry(fn, args = []){
  return (..._args) =>
    (rest => rest.length >= fn.length ? fn(...rest) : RambdaCurry(fn, rest))([
      ...args,
      ..._args,
    ])
}

function mult(x, y) { return x * y; }

var mult4 = Rf.curry(mult)(4)

var ramda_mult4 = R.curry(mult)(4)

var rambda_mult4 = RambdaCurry(mult)(4)

function manmult(x) {
  return function(y) {
    return x * y;
  };
}
var manual = manmult(4);




module.exports = {
  name: 'curry',
  tests: {
    'Rf:mult4(100)': function() {
      mult4(100);
    },
  
    'Ramda:mult4(100)': function() {
      ramda_mult4(100);
    },

    'Rambda:mult4(100)': function() {
      rambda_mult4(100);
    },
  
    'manual(100)': function() {
      manual(100);
    },

    'Rf': function() {
      const test1 = (Rf.curry((a) => a))
      const test2 = (Rf.curry((a, b) => a + b))
      const test3 = (Rf.curry((a, b, c) => a + b + c))
      const test4 = (Rf.curry((a, b, c, d) => a + b + c + d))
      const test5 = (Rf.curry((a, b, c, d, e) => a + b + c + d + e))
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

    'Ramda': function() {
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

    'Rambda': function() {
      const test1 = (RambdaCurry((a) => a))
      const test2 = (RambdaCurry((a, b) => a + b))
      const test3 = (RambdaCurry((a, b, c) => a + b + c))
      const test4 = (RambdaCurry((a, b, c, d) => a + b + c + d))
      const test5 = (RambdaCurry((a, b, c, d, e) => a + b + c + d + e))
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
