const assert = require('assert')
const I = require('../dist/cjs')

describe('divide', function() {
  it('divide', function() {
    assert.equal(I.divide(6, 3), 2)
    assert.equal(I.divide(6)(3), 2)
    assert.equal(I.divide('6', 3), 2)
    assert.equal(I.divide(6, '3'), 2)
    assert.equal(I.divide('6', '3'), 2)
  })
})
