const assert = require('assert')
const I = require('../dist/cjs')

describe('not', function() {
  it('A(true) => false', function() {
    assert.equal(I.not(true), false)
    assert.equal(I.not(1), false)
  })

  it('A(false), => true', function() {
    assert.equal(I.not(false), true)
    assert.equal(I.not(0), true)
  })
})
