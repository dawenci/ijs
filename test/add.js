const assert = require('assert')
const I = require('../dist/cjs')

describe('add', function() {
  it('add', function() {
    assert.equal(I.add(1, 1), 2)
    assert.equal(I.add(1)(1), 2)
    assert.equal(I.add('1', 1), 2)
    assert.equal(I.add(1, '1'), 2)
    assert.equal(I.add('1', '1'), 2)
  })
})
