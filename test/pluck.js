const assert = require('assert')
const I = require('../dist/cjs')

describe('pluck', function() {
  it('pluck', function() {
    assert.deepEqual(I.pluck('a', [{a:1},{a:2},{a:3}]), [1,2,3])
  })
})
