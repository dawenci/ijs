const assert = require('assert')
const I = require('../dist/cjs')

describe('drop', function() {
  it('drop', function() {
    assert.deepEqual(I.drop(4, [1,2,3]), [])
    assert.deepEqual(I.drop(2, [1,2,3]), [3])
    assert.deepEqual(I.drop(0, [1,2,3]), [1,2,3])
    assert.deepEqual(I.drop(-1, [1,2,3]), [1,2,3])

    assert.deepEqual(I.drop(4, '123'), '')
    assert.deepEqual(I.drop(2, '123'), '3')
    assert.deepEqual(I.drop(0, '123'), '123')
    assert.deepEqual(I.drop(-1, '123'), '123')
  })
})
