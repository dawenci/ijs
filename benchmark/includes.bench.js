const I = require('../dist/cjs')
const R = require('ramda')
const Rambda = require('rambda')
const _ = require('lodash')

const data0 = Array(10).fill(1)
const data1 = Array(10000).fill(1)
data0[5] = NaN
data0[6] = 'NaN'
data1[5000] = NaN
data1[5001] = 'NaN'

module.exports = {
  name: 'curry',
  tests: {
    'I * 10': function() {
      I.includes(NaN, data0)
      I.includes('NaN', data0)
    },
    'R * 10': function() {
      R.contains(NaN, data0)
      R.contains('NaN', data0)
    },
    '_ * 10': function() {
      _.includes(data0, NaN)
      _.includes(data0, 'NaN')
    },
    'native * 10': function() {
      data0.includes(NaN)
      data0.includes('NaN')
    },

    'I * 10000': function() {
      I.includes(NaN, data1)
      I.includes('NaN', data1)
    },
    'R * 10000': function() {
      R.contains(NaN, data1)
      R.contains('NaN', data1)
    },
    '_ * 10000': function() {
      _.includes(data1, NaN)
      _.includes(data1, 'NaN')
    },
    'native * 10000': function() {
      data1.includes(NaN)
      data1.includes('NaN')
    },
  }
};
