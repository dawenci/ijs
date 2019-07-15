const assert = require('assert')
const I = require('../dist/cjs')

describe('range', function() {
  it('range', function() {
    assert.deepEqual(I.range(0, -1), [])
    assert.deepEqual(I.range(0, 0), [])
    assert.deepEqual(I.range(0, 1), [0])
    assert.deepEqual(I.range(0, 2), [0, 1])
    assert.deepEqual(I.range(-2, 0), [-2, -1])
  })
})
