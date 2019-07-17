const assert = require('assert')
const I = require('../dist/cjs')

describe('max', function() {
  it('max', function() {
    assert.equal(I.max(1, 2), 2)
    assert.equal(I.max(1)(2), 2)
    assert.equal(I.max(1)(2, 3), 2)
    assert.equal(I.max(1, 2, 3), 2)
  })
})
