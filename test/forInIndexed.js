const assert = require('assert')
const I = require('../dist/cjs')

describe('forInIndexed', function() {
  it('forInIndexed', function() {
    const obj = { x: 'x' }
    Object.setPrototypeOf(obj, { y: 'y' })

    let i = 'x'
    I.forInIndexed((v, k) => {
      assert.equal(i, v)
      assert.equal(i, k)
      i = 'y'
    }, obj)
  })
})
