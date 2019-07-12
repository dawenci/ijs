const assert = require('assert')
const I = require('../dist/cjs')

describe('hasIn', function() {
  it('hasIn', function() {
    assert.ok(I.hasIn('0', [0]))
    assert.ok(I.hasIn(0, [0]))
    assert.ok(I.hasIn('0', {0: 1}))
    assert.ok(I.hasIn(0, {0: 1}))
    assert.ok(I.hasIn('a', {a: 1, b: 1}))

    const obj = {}
    Object.setPrototypeOf(obj, { x: 1 })
    assert.ok(I.hasIn('x', obj))
  })

})
