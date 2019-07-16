const assert = require('assert')
const I = require('../dist/cjs')

describe('flatten', function() {
  it('flatten', function() {
    assert.deepEqual(I.flatten([]), [])
    assert.deepEqual(I.flatten([1,2,3]), [1,2,3])
    assert.deepEqual(I.flatten([[1,2],3]), [1,2,3])
    assert.deepEqual(I.flatten([[1,2,3]]), [1,2,3])
    assert.deepEqual(I.flatten([[[1,2,3]]]), [[1,2,3]])
  })
})
