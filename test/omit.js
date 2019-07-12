const assert = require('assert')
const I = require('../dist/cjs')

describe('omit', function() {
  it('omit', function() {
    assert.deepEqual(I.omit([], {}), {})
    assert.deepEqual(I.omit(null, {}), {})
    assert.deepEqual(I.omit(undefined, {}), {})

    assert.deepEqual(I.omit([0], [1]), {})
    assert.deepEqual(I.omit([0], {0: 1}), {})
    assert.deepEqual(I.omit(['a'], {a: 1, b: 1}), {b: 1})
    
    const obj = {}
    Object.setPrototypeOf(obj, { x: 1, y: 1 })
    assert.deepEqual(I.omit(['x'], obj), {y:1})
  })

})
