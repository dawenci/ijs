const assert = require('assert')
const I = require('../dist/cjs')

describe('sumBy', function() {
  it('sumBy', function() {
    assert.equal(I.sumBy(I.property('a'), [{a:1},{a:2}]), 3)
    assert.equal(I.sumBy(I.property('a'), [{a:1},{a:null},{a:2}]), 3)
  })
})
