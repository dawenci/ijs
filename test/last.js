const assert = require('assert')
const I = require('../dist/cjs')

describe('last', function() {
  it('last', function() {
    assert.equal(I.last([1,2,3]), 3)
    assert.equal(I.last([]), undefined)
    assert.equal(I.last('123'), '3')
  })
})
