const assert = require('assert')
const I = require('../dist/cjs')

describe('where', function() {
  it('where', function() {
    assert.ok(I.where({ 0: v => v === 0 }, [0]))
    assert.ok(I.where({ a(v){return v > 0}, b(v){return v < 2} }, { a: 1, b: 1 }))

    const obj = {}
    Object.setPrototypeOf(obj, { x: 1 })
    assert.ok(I.where({ x(v){return v === 1} }, obj))
  })

})
