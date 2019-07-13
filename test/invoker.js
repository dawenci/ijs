const assert = require('assert')
const I = require('../dist/cjs')

describe('invoker', function() {
  it('invoker', function() {

    assert.equal(
      I.invoker('slice', [0, 1], '0,1,2'),
      '0'
    )

  })
})
