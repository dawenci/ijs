const assert = require('assert')
const I = require('../dist/cjs')

describe('indexOf', function() {
  it('String', function() {
    assert.equal(I.indexOf('1', '012'), 1)
    assert.equal(I.indexOf(1, '012'), 1)
  })

  it('Array', function() {
    assert.equal(I.indexOf(1, [0,1,2]), 1)
  })

  it('NaN', function() {
    assert.equal(I.indexOf(NaN, [NaN]), 0)
  })

  it('+-0', function() {
    assert.equal(I.indexOf(-0, [0]), -1)
    assert.equal(I.indexOf(-0, [-0]), 0)
    assert.equal(I.indexOf(0, [-0]), -1)
    assert.equal(I.indexOf(0, [0]), 0)
  })
})
