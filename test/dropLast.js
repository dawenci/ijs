const assert = require('assert')
const I = require('../dist/cjs')

describe('dropLast', function() {
  it('dropLast', function() {
    assert.deepEqual(I.dropLast(4, [1,2,3]), [])
    assert.deepEqual(I.dropLast(2, [1,2,3]), [1])
    assert.deepEqual(I.dropLast(0, [1,2,3]), [1,2,3])
    assert.deepEqual(I.dropLast(-1, [1,2,3]), [1,2,3])

    assert.deepEqual(I.dropLast(4, '123'), '')
    assert.deepEqual(I.dropLast(2, '123'), '1')
    assert.deepEqual(I.dropLast(0, '123'), '123')
    assert.deepEqual(I.dropLast(-10, '123'), '123')
  })
})
