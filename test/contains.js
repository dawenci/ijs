const assert = require('assert')
const I = require('../dist/cjs')

describe('contains', function() {
  it('string', function() {
    assert.ok(I.contains(0, '0'))
    assert.ok(I.contains('0', '0'))
  })

  it('Array', function() {
    assert.ok(I.contains(0, [0]))
    assert.ok(I.contains(0, '0'))
    assert.ok(I.contains(0, [0]))
  })

  it('ArrayLike', function() {
    const obj = { length: 2, 0: 0, 1: -0 }
    assert.ok(I.contains(0, obj))
    assert.ok(I.contains(-0, obj))
    assert.ok(!I.contains(1, obj))
  })

  it('function', function() {
    const fn = function() {}
    fn.x = 1
    assert.ok(I.contains(1, fn))
  })

  it('Object', function() {
    const obj = {}
    Object.setPrototypeOf(obj, { x: 1 })
    assert.equal(I.contains(1, obj), false)
    assert.equal(I.contains('0', [0]), false)
    assert.equal(I.contains(0, ['0']), false)
  })

  it('NaN', function() {
    assert.ok(I.contains(NaN, [NaN]))
  })

  it('+-0', function() {
    assert.ok(I.contains(0, [0]))
    assert.ok(I.contains(-0, [-0]))

    assert.ok(!I.contains(0, [-0]))
    assert.ok(!I.contains(-0, [0]))
  })
})
