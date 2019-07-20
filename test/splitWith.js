const assert = require('assert')
const I = require('../dist/cjs')

describe('splitWith', function() {
  it('splitWith', function() {
    assert.deepEqual(I.splitWith(x => x === '2', '123'), ['1', '23'])
    assert.deepEqual(I.splitWith(x => x === 2, [1,2,3]), [[1], [2,3]])
  })
})
