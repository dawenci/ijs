const assert = require('assert')
const I = require('../dist/cjs')

describe('initial', function() {
  it('initial', function() {
    assert.deepEqual(I.initial([1,2,3]), [1,2])
    assert.deepEqual(I.initial([]), [])
    assert.deepEqual(I.initial('123'), '12')
  })
})
