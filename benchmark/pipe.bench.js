const I = require('../dist/cjs')
const R = require('ramda')
const _ = require('lodash')

const f1 = x => x
const f2 = x => x
const d50 = I.range(0, 50)
const d5000 = I.range(0, 5000)
const d50000 = I.range(0, 50000)

module.exports = {
  name: 'pipe',
  tests: {
    'I:pipe': function() {
      I.pipe(f1, f2)(1)
    },
    'R:pipe': function() {
      R.pipe(f1, f2)(1)
    },
    '_.flow': function() {
      _.flow([f1, f2])(1)
    },

    'I.pipe * 50': function() {
      d50.map(I.pipe(f1, f2))
      d50.map(I.pipe([f1, f2, f1, f2]))
    },

    'R.pipe * 50': function() {
      d50.map(R.pipe(f1, f2))
      d50.map(R.pipe(f1, f2, f1, f2))
    },

    '_.flow * 50': function() {
      d50.map(_.flow([f1, f2]))
      d50.map(_.flow([f1, f2, f1, f2]))
    },

    'native * 50': function() {
      d50.map(v => f2(f1(v)))
      d50.map(v => f2(f1(f2(f1(v)))))
    },

    'I.pipe * 5000': function() {
      d5000.map(I.pipe(f1, f2))
      d5000.map(I.pipe([f1, f2, f1, f2]))
    },

    'R.pipe * 5000': function() {
      d5000.map(R.pipe(f1, f2))
      d5000.map(R.pipe(f1, f2, f1, f2))
    },

    '_.flow * 5000': function() {
      d5000.map(_.flow([f1, f2]))
      d5000.map(_.flow([f1, f2, f1, f2]))
    },

    'native * 5000': function() {
      d5000.map(v => f2(f1(v)))
      d5000.map(v => f2(f1(f2(f1(v)))))
    },

    'I.pipe * 50000': function() {
      d50000.map(I.pipe(f1, f2))
      d50000.map(I.pipe([f1, f2, f1, f2]))
    },

    'R.pipe * 50000': function() {
      d50000.map(R.pipe(f1, f2))
      d50000.map(R.pipe(f1, f2, f1, f2))
    },

    '_.flow * 50000': function() {
      d50000.map(_.flow([f1, f2]))
      d50000.map(_.flow([f1, f2, f1, f2]))
    },

    'native * 50000': function() {
      d50000.map(v => f2(f1(v)))
      d50000.map(v => f2(f1(f2(f1(v)))))
    },

  }
};
