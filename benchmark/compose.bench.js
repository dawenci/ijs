const I = require('../dist/cjs')
const R = require('ramda')
const _ = require('lodash')

const f1 = x => x
const f2 = x => x
const d50 = I.range(0, 50)
const d5000 = I.range(0, 5000)
const d50000 = I.range(0, 50000)

module.exports = {
  name: 'compose',
  tests: {
    'I:compose': function() {
      I.compose([f1, f2])(1)
    },
    'R:compose': function() {
      R.compose(f1, f2)(1)
    },
    '_.flowRight': function() {
      _.flowRight([f1, f2])(1)
    },

    'I.compose * 50': function() {
      d50.map(I.compose([f1, f2]))
      d50.map(I.compose([f1, f2, f1, f2]))
    },

    'R.compose * 50': function() {
      d50.map(R.compose(f1, f2))
      d50.map(R.compose(f1, f2, f1, f2))
    },

    '_.flowRight * 50': function() {
      d50.map(_.flowRight([f1, f2]))
      d50.map(_.flowRight([f1, f2, f1, f2]))
    },

    'native * 50': function() {
      d50.map(v => f1(f2(v)))
      d50.map(v => f1(f2(f1(f2(v)))))
    },

    'I.compose * 5000': function() {
      d5000.map(I.compose([f1, f2]))
      d5000.map(I.compose([f1, f2, f1, f2]))
    },

    'R.compose * 5000': function() {
      d5000.map(R.compose(f1, f2))
      d5000.map(R.compose(f1, f2, f1, f2))
    },

    '_.flowRight * 5000': function() {
      d5000.map(_.flowRight([f1, f2]))
      d5000.map(_.flowRight([f1, f2, f1, f2]))
    },

    'native * 5000': function() {
      d5000.map(v => f1(f2(v)))
      d5000.map(v => f1(f2(f1(f2(v)))))
    },

    'I.compose * 50000': function() {
      d50000.map(I.compose([f1, f2]))
      d50000.map(I.compose([f1, f2, f1, f2]))
    },

    'R.compose * 50000': function() {
      d50000.map(R.compose(f1, f2))
      d50000.map(R.compose(f1, f2, f1, f2))
    },

    '_.flowRight * 50000': function() {
      d50000.map(_.flowRight([f1, f2]))
      d50000.map(_.flowRight([f1, f2, f1, f2]))
    },

    'native * 50000': function() {
      d50000.map(v => f1(f2(v)))
      d50000.map(v => f1(f2(f1(f2(v)))))
    },

  }
};
