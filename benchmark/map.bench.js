const Rf = require('../dist/cjs')
const Ramda = require('ramda')

var nums = [8, 2, 85, 2, 34, 3, 23, 247, 57, 8, 0, 6, 5, 46, 54, 643];
function sq(x) { return x * x; }
var mapSq = Rf.map(sq);
var ramdaMapSq = Ramda.map(sq);

module.exports = {
  name: 'map',
  tests: {
    'map(sq, nums)': function() {
      Rf.map(sq, nums);
    },
  
    'map(sq)(nums)': function() {
      Rf.map(sq)(nums);
    },
  
    'mapSq(nums)': function() {
      mapSq(nums);
    },
  
  
    'Ramda:map(sq, nums)': function() {
      Ramda.map(sq, nums);
    },
  
    'Ramda:map(sq)(nums)': function() {
      Ramda.map(sq)(nums);
    },
  
    'Ramda:mapSq(nums)': function() {
      ramdaMapSq(nums);
    },
  
  
    'native map': function() {
      nums.map(sq);
    },
  }
};
