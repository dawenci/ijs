const assert = require('assert')
const I = require('../dist/cjs')

describe('has', function() {
  it('has', function() {
    assert.ok(I.has('0', [0]))
    assert.ok(I.has(0, [0]))
    assert.ok(I.has('0', {0: 1}))
    assert.ok(I.has(0, {0: 1}))
    assert.ok(I.has('a', {a: 1, b: 1}))

    const obj = {}
    Object.setPrototypeOf(obj, { x: 1 })
    assert.equal(I.has('x', obj), false)
  })

})
