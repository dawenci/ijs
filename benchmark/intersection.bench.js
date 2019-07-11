const I = require('../dist/cjs')
const R = require('ramda')
const Rambda = require('rambda')
const _ = require('lodash')

const TEST_TIME = 10000
const data3 = Array((TEST_TIME/200) >>> 0).fill(undefined)
const data4 = Array((TEST_TIME/200) >>> 0).fill(null)
const dataA = Array(TEST_TIME >>> 0).fill(0).map((n,i) => i)
  .concat(data3).concat(data4).sort(() => Math.random() > 0.5 ? 1 : -1)

const dataB = Array((TEST_TIME / 2) >>> 0).fill(0).map((n,i) => i + i)
  .concat(data3).concat(data4).sort(() => Math.random() > 0.5 ? 1 : -1)

module.exports = {
  name: 'map',
  tests: {
    'I.intersection()': function() {
      I.uniq(dataA, dataB);
    },
    'R.intersection()': function() {
      R.uniq(dataA, dataB);
    },
    '_.intersection()': function() {
      _.uniq(dataA, dataB);
    },
  }
};
