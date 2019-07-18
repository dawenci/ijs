const assert = require('assert')
const I = require('../dist/cjs')

describe('capitalize', function() {
  it('capitalize', function() {
    assert.equal(I.capitalize('abc'), 'Abc')
    assert.equal(I.capitalize('  abc'), 'Abc')
  })
})
