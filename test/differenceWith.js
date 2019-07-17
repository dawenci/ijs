const assert = require('assert')
const I = require('../dist/cjs')

describe('differenceWith', function() {
  it('differenceWith', function() {
    assert.deepEqual(I.differenceWith((a,b) => a.a === b.a, [{a:1}, {a:2}], [{a:2}]), [{a:1}])
  })

  it('消重', function() {
    assert.deepEqual(I.differenceWith((a,b) => a.a === b.a, [{a:1},{a:1},{a:2}], [{a:2}]), [{a:1}])
  })
})
