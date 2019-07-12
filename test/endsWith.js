const assert = require('assert')
const I = require('../dist/cjs')

describe('endsWith', function() {
  it('endsWith', function() {
    assert.ok(I.endsWith('end', 'sdfsdfend'))
  })
})
