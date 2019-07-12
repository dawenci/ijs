const assert = require('assert')
const I = require('../dist/cjs')

describe('keys', function() {
  it('keys', function() {
    assert.deepEqual(I.keys(null), [])
    assert.deepEqual(I.keys(undefined), [])
    assert.deepEqual(I.keys(1), [])
    assert.deepEqual(I.keys(false), [])
    assert.deepEqual(I.keys(true), [])
    assert.deepEqual(I.keys([]), [])
    assert.deepEqual(I.keys({}), [])

    assert.deepEqual(I.keys({a: 1, b: 1}), ['a', 'b'])
    assert.deepEqual(I.keys([1,1,1]), ['0', '1', '2'])
    assert.deepEqual(I.keys('aaa'), ['0', '1', '2'])

    const obj = {}
    Object.setPrototypeOf(obj, { x: 1 })
    assert.deepEqual(I.keys(obj), [])
  })

})
