const assert = require('assert')
const I = require('../dist/cjs')

describe('cond', function() {
  it('cond', function() {
    const fn = I.cond([
      [(i) => i === 1, (i) => i * 2],
      [(i) => i === 2, (i) => i * 3],
    ])
    assert.equal(fn(1), 2)
    assert.equal(fn(2), 6)
  })
})
