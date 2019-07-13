const assert = require('assert')
const I = require('../dist/cjs')

describe('partial', function() {
  it('partial', function() {
    function sub(a, b) {
      return a - b
    }
    assert.equal(I.partial(sub, [2])(1), 1)
    assert.equal(I.partial(sub, [I.__, 2])(1), -1)
  })
})
