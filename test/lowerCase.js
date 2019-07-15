const assert = require('assert')
const I = require('../dist/cjs')

describe('lowerCase', function() {
  it('lowerCase', function() {
    assert.equal(  I.lowerCase('SDF'), 'sdf')
  })
})
