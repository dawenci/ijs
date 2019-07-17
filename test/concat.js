const assert = require('assert')
const I = require('../dist/cjs')

describe('concat', function() {
  it('concat', function() {
    assert.deepEqual(I.concat(1,2,3), [1,2,3])
    assert.deepEqual(I.concat([1], 2, 3), [1,2,3])
    assert.deepEqual(I.concat([1], [2], 3), [1,2,3])
    assert.deepEqual(I.concat('1', 2, 3), '123')
    assert.deepEqual(I.concat('1', '23'), '123')
  })
})
