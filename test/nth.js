const assert = require('assert')
const I = require('../dist/cjs')

describe('nth', function() {
  it('nth', function() {
    assert.equal(I.nth(1, [1,2,3]), 2)
    assert.equal(I.nth(1, []), undefined)
    assert.equal(I.nth(1, '123'), '2')
  })
})
