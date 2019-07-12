const assert = require('assert')
const I = require('../dist/cjs')

describe('subtract', function() {
  it('subtract', function() {
    assert.equal(I.subtract(1, 2), -1)
    assert.equal(I.subtract(1)(2), -1)
    assert.equal(I.subtract('1', 2), -1)
    assert.equal(I.subtract(1, '2'), -1)
    assert.equal(I.subtract('1', '2'), -1)
  })
})
