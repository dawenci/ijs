const assert = require('assert')
const I = require('../dist/cjs')

describe('reduce', function() {
  it('reduce', function() {
    assert.equal(I.reduce(I.add, 0, [1,2,3]), 6)
  })
})
