const assert = require('assert')
const I = require('../dist/cjs')

describe('trim', function() {
  it('trim', function() {
    assert.deepEqual(I.trim('   \n  sdf \n '), 'sdf')
  })
})
