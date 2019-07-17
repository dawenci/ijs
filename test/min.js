const assert = require('assert')
const I = require('../dist/cjs')

describe('min', function() {
  it('min', function() {
    assert.equal(I.min(1, 2), 1)
    assert.equal(I.min(1)(2), 1)
    assert.equal(I.min(2)(3, 1), 2)
    assert.equal(I.min(2, 3, 1), 2)
  })
})
