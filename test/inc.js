const assert = require('assert')
const I = require('../dist/cjs')

describe('inc', function() {
  it('inc', function() {
    assert.equal(I.inc(1), 2)
  })
})
