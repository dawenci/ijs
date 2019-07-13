const assert = require('assert')
const I = require('../dist/cjs')

describe('once', function() {
  it('once', function() {
    const incOne = I.once(x => x + 1)
    const result1 = incOne(1)
    const result2 = incOne(2)
    assert.equal(result1, 2)
    assert.equal(result1, result2)
  })
})
