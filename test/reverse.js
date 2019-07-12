const assert = require('assert')
const I = require('../dist/cjs')

describe('reverse', function() {
  it('reverse', function() {
    const arr = [1,2,3]
    assert.notEqual(I.reverse([1,2,3]), arr)
    assert.deepEqual(I.reverse([1,2,3]), [3,2,1])
    assert.equal(I.reverse('123'), '321')
  })
})
