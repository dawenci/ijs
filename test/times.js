const assert = require('assert')
const I = require('../dist/cjs')

describe('times', function() {
  it('times', function() {
    assert.deepEqual(I.times(I.identity, null), [])
    assert.deepEqual(I.times(I.identity, -1), [])
    assert.deepEqual(I.times(I.identity, 1.5), [0])
    assert.deepEqual(I.times(I.identity, 5), [0,1,2,3,4])
  })
})
