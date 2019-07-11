const I = require('../dist/cjs')
const R = require('ramda')
const Rambda = require('rambda')
const _ = require('lodash')

const data1 = Array(10000).fill(0).map((n,i) => i)
const data2 = Array(5000).fill(0).map((n,i) => i + i)
const data3 = Array(50).fill(undefined)
const data4 = Array(50).fill(null)
const data = data1.concat(data2).concat(data3).concat(data4).sort(() => Math.random() > 0.5 ? 1 : -1)

module.exports = {
  name: 'map',
  tests: {
    'I.uniq()': function() {
      I.uniq(data);
    },
    'R.uniq()': function() {
      R.uniq(data);
    },
    'Rambda.uniq()': function() {
      Rambda.uniq(data);
    },
    '_.uniq()': function() {
      _.uniq(data);
    },


    'I.uniqBy()': function() {
      I.uniqBy(i=>i, data);
    },
    'R.uniqBy()': function() {
      R.uniqBy(i=>i, data);
    },
    '_.uniqBy()': function() {
      _.uniqBy(data, i=>i);
    },

    'I.uniqWith()': function() {
      I.uniqWith((a,b)=>a==b, data);
    },
    'R.uniqWith()': function() {
      R.uniqWith((a,b)=>a==b, data);
    },
    'Rambda.uniqWith()': function() {
      Rambda.uniqWith((a,b)=>a==b, data);
    },
    '_.uniqWith()': function() {
      _.uniqWith(data, (a,b)=>a==b);
    },

    'native': function() {
      return data.filter((n, i, nums) => nums.indexOf(n) === i)
    },
  }
};
