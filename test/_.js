const assert = require('assert')
const I = require('../dist/cjs')

describe('placeholder', function() {
  it('placeholder', function() {
    assert.ok(I._(I._))
  })
})
