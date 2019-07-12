const assert = require('assert')
const I = require('../dist/cjs')

describe('range', function() {
  it('range', function() {
    assert.deepEqual(I.range(0, 1), [0])
  })
})
