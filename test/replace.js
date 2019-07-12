const assert = require('assert')
const I = require('../dist/cjs')

describe('replace', function() {
  it('replace', function() {
    assert.ok(I.replace('/B/', 'R', 'ABC'), 'ARC')
  })
})
