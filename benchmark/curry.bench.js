const Rf = require('../dist/cjs')
const Ramda = require('ramda')

function mult(x, y) { return x * y; }

var RfMult4 = Rf.curry(mult)(4)
var ramdaMult4 = Ramda.curry(mult)(4)

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
      RfMult4(100);
    },
  
    'Ramda:mult4(100)': function() {
      ramdaMult4(100);
    },
  
    'manual(100)': function() {
      manual(100);
    },
  }
};
