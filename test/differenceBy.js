const assert = require('assert')
const I = require('../dist/cjs')

describe('differenceBy', function() {
  it('differenceBy', function() {
    assert.deepEqual(I.differenceBy(I.property('a'), [{a:1}, {a:2}], [{a:2}]), [{a:1}])
  })

  it('消重', function() {
    assert.deepEqual(I.differenceBy(I.property('a'), [{a:1},{a:1},{a:2}], [{a:2}]), [{a:1}])
  })
})
