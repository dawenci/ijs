const I = require('../dist/cjs')
const R = require('ramda')
const _ = require('lodash')

const d50 = I.range(0, 50)
const d5000 = I.range(0, 5000)
const d50000 = I.range(0, 50000)

module.exports = {
  name: 'addIndex',
  tests: {
    'I.addIndex(I.map) * 50': function() {
      I.addIndex(I.map())((value, index) => value + index)(d50)
    },
    'I.map * 50': function() {
      I.map(((value) => value + value))(d50)
    },
    'native map * 50': function() {
      d50.map(((value, index) => value + index))
    },

    'I.addIndex(I.map) * 5000': function() {
      I.addIndex(I.map())((value, index) => value + index)(d5000)
    },
    'I.map * 5000': function() {
      I.map(((value) => value + value))(d5000)
    },
    'native map * 5000': function() {
      d5000.map(((value, index) => value + index))
    },

    'I.addIndex(I.map) * 50000': function() {
      I.addIndex(I.map())((value, index) => value + index)(d50000)
    },
    'I.map * 50000': function() {
      I.map(((value) => value + value))(d50000)
    },
    'native map * 50000': function() {
      d50000.map(((value, index) => value + index))
    },
  }
};
