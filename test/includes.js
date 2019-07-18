const assert = require('assert')
const I = require('../dist/cjs')

describe('includes', function() {
  it('includes', function() {
    assert.ok(I.includes(0, [0]))
    assert.ok(I.includes(0, '0'))
    assert.ok(I.includes(0, [0]))
  })

  it('function', function() {
    const fn = function() {}
    fn.x = 1
    assert.ok(I.includes(1, fn))
  })

  it('ArrayLike', function() {
    const obj = {}
    Object.setPrototypeOf(obj, { x: 1 })
    assert.equal(I.includes(1, obj), false)
    assert.equal(I.includes('0', [0]), false)
    assert.equal(I.includes(0, ['0']), false)
  })

  it('NaN', function() {
    assert.ok(I.includes(NaN, [NaN]))
  })

  it('+-0', function() {
    assert.ok(I.includes(0, [0]))
    assert.ok(I.includes(-0, [-0]))

    assert.ok(!I.includes(0, [-0]))
    assert.ok(!I.includes(-0, [0]))
  })
})
