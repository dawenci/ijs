const Rf = require('../dist/cjs')
const Ramda = require('ramda')

var nums = [8, 2, 85, 2, 34, 3, 23, 247, 57, 8, 0, 6, 5, 46, 54, 643];

module.exports = {
  name: 'map',
  tests: {
    'Rf.uniq()': function() {
      Rf.uniq(nums);
    },
  
    'Ramda.uniq()': function() {
      Ramda.uniq(nums);
    },

    'Rf.uniqBy()': function() {
      Rf.uniqBy(i=>i, nums);
    },
  
    'Ramda.uniqBy()': function() {
      Ramda.uniqBy(i=>i, nums);
    },

    'Rf.uniqWith()': function() {
      Rf.uniqWith((a,b)=>a==b, nums);
    },
  
    'Ramda.uniqWith()': function() {
      Ramda.uniqWith((a,b)=>a==b, nums);
    },

    'native': function() {
      return nums.filter((n, i, nums) => nums.indexOf(n) === i)
    },
  }
};
