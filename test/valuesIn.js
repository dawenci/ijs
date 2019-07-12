const assert = require('assert')
const I = require('../dist/cjs')

describe('valuesIn', function() {
  it('valuesIn', function() {
    assert.deepEqual(I.valuesIn(null), [])
    assert.deepEqual(I.valuesIn(undefined), [])
    assert.deepEqual(I.valuesIn(1), [])
    assert.deepEqual(I.valuesIn(false), [])
    assert.deepEqual(I.valuesIn(true), [])
    assert.deepEqual(I.valuesIn([]), [])
    assert.deepEqual(I.valuesIn({}), [])

    assert.deepEqual(I.valuesIn({a: 1, b: 1}), [1, 1])
    assert.deepEqual(I.valuesIn([1,1,1]), [1, 1, 1])
    assert.deepEqual(I.valuesIn('aaa'), ['a', 'a', 'a'])

    const obj = {}
    Object.setPrototypeOf(obj, { x: 1 })
    assert.deepEqual(I.valuesIn(obj), [1])
  })

})
