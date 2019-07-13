const I = require('../dist/cjs')
const R = require('ramda')
const _ = require('lodash')

const add = (x, y) => x + y

const d5000 = I.range(0, 5000)

module.exports = {
  name: 'partial',
  tests: {
    'I:partial': function() {
      I.partial(add, [I.__, 1])(1)
    },
    'R:curry': function() {
      R.curry(add)(R.__, 1)(1)
    },
    '_.partial': function() {
      _.partial(add, _, 1)(1)
    },
    'native': function() {
      function partial(fn, y) {
        return function(holder) {
          return fn(holder, y)
        }
      }
      partial(add, 1)(1)
    },

    'I:partial * 5000': function() {
      d5000.map(I.partial(add, [I.__, 1]))
    },
    'R:curry * 5000': function() {
      d5000.map(R.curry(add)(R.__, 1))
    },
    '_.partial * 5000': function() {
      d5000.map(_.partial(add, _, 1))
    },
    'native * 5000': function() {
      function partial(fn, y) {
        return function(holder) {
          return fn(holder, y)
        }
      }
      d5000.map(partial(add, 1))
    },

  }
};
