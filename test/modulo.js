const assert = require('assert')
const I = require('../dist/cjs')

describe('modulo', function() {
  it('modulo', function() {
    assert.equal(I.modulo(1, 7), 1)
    assert.equal(I.modulo(1)(7), 1)
    assert.equal(I.modulo('1', 7), 1)
    assert.equal(I.modulo(1, '7'), 1)
    assert.equal(I.modulo('1', '7'), 1)
  })
})
