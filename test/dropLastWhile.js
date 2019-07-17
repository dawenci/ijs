const assert = require('assert')
const I = require('../dist/cjs')

describe('dropLastWhile', function() {
  it('dropLastWhile', function() {
    assert.deepEqual(I.dropLastWhile(i => i > 2, [1,2,3]), [1,2])
    assert.deepEqual(I.dropLastWhile(c => c !== 'A', 'AABB'), 'AA')
  })
})
