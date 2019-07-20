const assert = require('assert')
const I = require('../dist/cjs')

describe('zip', function() {
  it('zip', function() {
    assert.deepEqual(I.zip([1,2], ['a', 'b']), [[1, 'a'], [2, 'b']])
    assert.deepEqual(I.zip([1], ['a', 'b']), [[1, 'a']])
    assert.deepEqual(I.zip([1,2], ['a']), [[1, 'a']])
  })
})
