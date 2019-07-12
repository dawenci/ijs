const assert = require('assert')
const I = require('../dist/cjs')

describe('indexOf', function() {
  it('indexOf', function() {
    assert.equal(I.indexOf(3, [1,NaN,3]), 2)
    assert.equal(I.indexOf(NaN, [1,NaN,3]), 1)
  })
})
