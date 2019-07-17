const assert = require('assert')
const I = require('../dist/cjs')

describe('dropWhile', function() {
  it('dropWhile', function() {
    assert.deepEqual(I.dropWhile(i => i < 2, [1,2,3]), [2,3])
    assert.deepEqual(I.dropWhile(c => c !== 'B', 'AABB'), 'BB')
  })
})
