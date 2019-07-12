const assert = require('assert')
const I = require('../dist/cjs')

describe('find', function() {
  it('find', function() {
    assert.equal(I.find(I.eq(2), [1,2,3]), 2)
  })
})
