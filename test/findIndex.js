const assert = require('assert')
const I = require('../dist/cjs')

describe('findIndex', function() {
  it('findIndex', function() {
    assert.equal(I.findIndex(I.eq(2), [1,2,3]), 1)
  })
})
