const assert = require('assert')
const I = require('../dist/cjs')

describe('keysIn', function() {
  it('keysIn', function() {
    assert.deepEqual(I.keysIn(null), [])
    assert.deepEqual(I.keysIn(undefined), [])
    assert.deepEqual(I.keysIn(1), [])
    assert.deepEqual(I.keysIn(false), [])
    assert.deepEqual(I.keysIn(true), [])
    assert.deepEqual(I.keysIn([]), [])
    assert.deepEqual(I.keysIn({}), [])

    assert.deepEqual(I.keysIn({a: 1, b: 1}), ['a', 'b'])
    assert.deepEqual(I.keysIn([1,1,1]), ['0', '1', '2'])
    assert.deepEqual(I.keysIn('aaa'), ['0', '1', '2'])

    const obj = {}
    Object.setPrototypeOf(obj, { x: 1 })
    assert.deepEqual(I.keysIn(obj), ['x'])
  })

})
