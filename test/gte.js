const assert = require('assert')
const I = require('../dist/cjs')

describe('gte', function() {
  it('gte', function() {
    assert.ok(I.gte(1,0))
    assert.ok(I.gte(1,1))
    assert.ok(I.gte(1)(0))
    assert.ok(I.gte(1)(1))
  })
})
