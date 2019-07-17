const assert = require('assert')
const I = require('../dist/cjs')

describe('difference', function() {
  it('difference', function() {
    assert.deepEqual(I.difference([1,2], [1,3]), [2])
  })

  it('消重', function() {
    assert.deepEqual(I.difference([1,2,2], [1,3]), [2])
  })
})
