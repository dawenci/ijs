const assert = require('assert')
const I = require('../dist/cjs')

describe('pick', function() {
  it('pick', function() {
    assert.deepEqual(I.pick([], {}), {})
    assert.deepEqual(I.pick(null, {}), {})
    assert.deepEqual(I.pick(undefined, {}), {})

    assert.deepEqual(I.pick([0], [1]), {0: 1})
    assert.deepEqual(I.pick([0], {0: 1}), {0: 1})
    assert.deepEqual(I.pick(['a', 'b'], {a: 1, b: 1}), {a: 1, b: 1})
    
    const obj = {}
    Object.setPrototypeOf(obj, { x: 1 })
    assert.deepEqual(I.pick(['x'], obj), {x:1})
  })

})
