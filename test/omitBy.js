const assert = require('assert')
const I = require('../dist/cjs')

describe('omitBy', function() {
  it('omitBy', function() {
    assert.deepEqual(I.omitBy(I.is(Number), {}), {})
    assert.deepEqual(I.omitBy(I.is(Number), {}), {})
    assert.deepEqual(I.omitBy(I.is(Number), {}), {})

    assert.deepEqual(I.omitBy(I.is(Number), [1]), {})
    assert.deepEqual(I.omitBy(I.is(Number), {0: 1}), {})
    assert.deepEqual(I.omitBy(I.is(Number), {a: 1, b: '1'}), {b: '1'})
    
    const obj = {}
    Object.setPrototypeOf(obj, { x: 1, y: '1' })
    assert.deepEqual(I.omitBy(I.is(Number), obj), {y:'1'})
  })

})
