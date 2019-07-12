const assert = require('assert')
const I = require('../dist/cjs')

describe('forOwn', function() {
  it('forOwn', function() {
    const obj = { x: 'x' }
    Object.setPrototypeOf(obj, { y: 'y' })
    I.forOwn(v => {
      assert.equal('x', v)
    }, obj)
  })
})
