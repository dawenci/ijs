const assert = require('assert')
const I = require('../dist/cjs')

describe('forIn', function() {
  it('forIn', function() {
    const obj = { x: 'x' }
    Object.setPrototypeOf(obj, { y: 'y' })

    let i = 'x'
    I.forIn(v => {
      assert.equal(i, v)
      i = 'y'
    }, obj)
  })
})
