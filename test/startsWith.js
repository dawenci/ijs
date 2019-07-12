const assert = require('assert')
const I = require('../dist/cjs')

describe('startsWith', function() {
  it('startsWith', function() {
    assert.ok(I.startsWith('start', 'startsdfsdf'))
  })
})
