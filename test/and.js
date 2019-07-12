const assert = require('assert')
const I = require('../dist/cjs')

describe('and', function() {
  it('A(true), B(true) => B(true)', function() {
    assert.equal(I.and(true, true), true)
    assert.equal(I.and(1, 2), 2)
  })

  it('A(true), B(false) => B(false)', function() {
    assert.equal(I.and(true, false), false)
    assert.equal(I.and(1, 0), 0)
  })

  it('A(false), B(true) => A(false)', function() {
    assert.equal(I.and(false, true), false)
    assert.equal(I.and(0, 2), 0)
  })

  it('A(false), B(false) => A(false)', function() {
    assert.equal(I.and(false, true), false)
    assert.equal(I.and(0, null), 0)
  })
})
