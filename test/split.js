const assert = require('assert')
const I = require('../dist/cjs')

describe('split', function() {
  it('split', function() {
    assert.deepEqual(I.split('-', 'sdf-sdf'), ['sdf', 'sdf'])
    assert.deepEqual(I.split(/-/, 'sdf-sdf'), ['sdf', 'sdf'])
  })
})
