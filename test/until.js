const assert = require('assert')
const I = require('../dist/cjs')

describe('until', function() {
  it('until', function() {
    assert.equal(I.until(v => v === 3, I.inc, 1), 3)
  })
})
