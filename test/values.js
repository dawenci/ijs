const assert = require('assert')
const I = require('../dist/cjs')

describe('values', function() {
  it('values', function() {
    assert.deepEqual(I.values(null), [])
    assert.deepEqual(I.values(undefined), [])
    assert.deepEqual(I.values(1), [])
    assert.deepEqual(I.values(false), [])
    assert.deepEqual(I.values(true), [])
    assert.deepEqual(I.values([]), [])
    assert.deepEqual(I.values({}), [])

    assert.deepEqual(I.values({a: 1, b: 1}), [1, 1])
    assert.deepEqual(I.values([1,1,1]), [1, 1, 1])
    assert.deepEqual(I.values('aaa'), ['a', 'a', 'a'])

    const obj = {}
    Object.setPrototypeOf(obj, { x: 1 })
    assert.deepEqual(I.values(obj), [])
  })

})
