const assert = require('assert')
const I = require('../dist/cjs')

describe('isNaN', function() {
  it('isNaN', () => {
    assert.ok(I.isNaN(NaN))
    assert.equal(I.isNaN(0), false)
    assert.equal(I.isNaN(1), false)
    assert.equal(I.isNaN(undefined), false)
    assert.equal(I.isNaN(null), false)
    assert.equal(I.isNaN(false), false)
    assert.equal(I.isNaN('0'), false)
  })
})
