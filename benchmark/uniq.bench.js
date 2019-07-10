const I = require('../dist/cjs')
const R = require('ramda')
const Rambda = require('rambda')
const _ = require('lodash')


const nums = [8, 2, 85, 2, 34, 3, 23, 247, 57, 8, 0, 6, 5, 46, 54, 643];

module.exports = {
  name: 'map',
  tests: {
    'I.uniq()': function() {
      I.uniq(nums);
    },
    'R.uniq()': function() {
      R.uniq(nums);
    },
    'Rambda.uniq()': function() {
      Rambda.uniq(nums);
    },
    '_.uniq()': function() {
      _.uniq(nums);
    },


    'I.uniqBy()': function() {
      I.uniqBy(i=>i, nums);
    },
    'R.uniqBy()': function() {
      R.uniqBy(i=>i, nums);
    },
    '_.uniqBy()': function() {
      _.uniqBy(nums, i=>i);
    },

    'I.uniqWith()': function() {
      I.uniqWith((a,b)=>a==b, nums);
    },
    'R.uniqWith()': function() {
      R.uniqWith((a,b)=>a==b, nums);
    },
    'Rambda.uniqWith()': function() {
      Rambda.uniqWith((a,b)=>a==b, nums);
    },
    '_.uniqWith()': function() {
      _.uniqWith(nums, (a,b)=>a==b);
    },

    'native': function() {
      return nums.filter((n, i, nums) => nums.indexOf(n) === i)
    },
  }
};
