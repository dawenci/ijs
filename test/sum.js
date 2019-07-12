const assert = require('assert')
const I = require('../dist/cjs')

describe('sum', function() {
  it('sum', function() {
    assert.equal(I.sum([1,2]), 3)
    assert.equal(I.sum([1,null,2]), 3)
  })
})
