const assert = require('assert')
const I = require('../dist/cjs')

describe('repeat', function() {
  it('repeat', function() {
    assert.equal(I.repeat('sdf', 2), 'sdfsdf')
  })
})
