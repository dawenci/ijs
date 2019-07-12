const assert = require('assert')
const I = require('../dist/cjs')

describe('lastIndexOf', function() {
  it('lastIndexOf', function() {
    assert.equal(I.lastIndexOf(3, [1, NaN, 3, 3]), 3)
    assert.equal(I.lastIndexOf(NaN, [1,NaN,NaN,3]), 2)
  })
})
