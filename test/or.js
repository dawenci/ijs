const assert = require('assert')
const I = require('../dist/cjs')

describe('or', function() {
  it('A(true), B(true) => A(true)', function() {
    assert.equal(I.or(true, true), true)
    assert.equal(I.or(1, 2), 1)
  })

  it('A(true), B(false) => A(true)', function() {
    assert.equal(I.or(true, false), true)
    assert.equal(I.or(1, 0), 1)
  })

  it('A(false), B(true) => B(true)', function() {
    assert.equal(I.or(false, true), true)
    assert.equal(I.or(0, 2), 2)
  })

  it('A(false), B(false) => B(false)', function() {
    assert.equal(I.or(false, false), false)
    assert.equal(I.or(0, null), null)
  })
})
