const assert = require('assert')
const I = require('../dist/cjs')

describe('repeat', function() {
  it('repeat', function() {
    assert.deepEqual(I.repeat('a', 0), [])
    assert.deepEqual(I.repeat(1, 2), [1, 1])
    assert.deepEqual(I.repeat(undefined, 2), [undefined, undefined])
    assert.deepEqual(I.repeat('a', 2), ['a', 'a'])
  })
})
