const I = require('../dist/cjs')
const R = require('ramda')
const _ = require('lodash')


var nums = [8, 2, 85, 2, 34, 3, 23, 247, 57, 8, 0, 6, 5, 46, 54, 643];
function square(x) { return x * x; }

var I_mapSq = I.map(square);
var R_mapSQ = R.map(square);

module.exports = {
  name: 'map',
  tests: {
    'I.map(sq, nums)': function() {
      I.map(square, nums);
    },
  
    'I.map(sq)(nums)': function() {
      I.map(square)(nums);
    },
  
    'I:mapSq(nums)': function() {
      I_mapSq(nums);
    },
  
  
    'R.map(sq, nums)': function() {
      R.map(square, nums);
    },
  
    'R.map(sq)(nums)': function() {
      R.map(square)(nums);
    },
  
    'R:mapSq(nums)': function() {
      R_mapSQ(nums);
    },
  
    'native map': function() {
      nums.map(square);
    },
  }
};
