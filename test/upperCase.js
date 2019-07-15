const assert = require('assert')
const I = require('../dist/cjs')

describe('upperCase', function() {
  it('upperCase', function() {
    assert.equal(  I.upperCase('sdf'), 'SDF')
  })
})
