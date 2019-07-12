const assert = require('assert')
const I = require('../dist/cjs')

describe('pickBy', function() {
  it('pickBy', function() {
    assert.deepEqual(I.pickBy( I.is(Number), [1]), {0: 1})
    assert.deepEqual(I.pickBy( I.is(Number), {a: 1, b: '1'}), {a: 1})
    
    const obj = {}
    Object.setPrototypeOf(obj, { x: 1, y: '1' })
    assert.deepEqual(I.pickBy( I.is(Number), obj), {x:1})
  })

})
