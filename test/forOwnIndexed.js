const assert = require('assert')
const I = require('../dist/cjs')

describe('forOwnIndexed', function() {
  it('forOwnIndexed', function() {
    const obj = { x: 'x' }
    Object.setPrototypeOf(obj, { y: 'y' })
    I.forOwnIndexed((v, k) => {
      assert.equal('x', v)
      assert.equal('x', k)
    }, obj)
  })
})
