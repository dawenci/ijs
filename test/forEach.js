const assert = require('assert')
const I = require('../dist/cjs')

describe('forEach', function() {
  it('forEach', function() {
    let i = 1
    I.forEach(v => {
      assert.equal(v, i)
      i += 1
    }, [1,2,3])
  })
})
