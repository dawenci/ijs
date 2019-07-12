const assert = require('assert')
const I = require('../dist/cjs')

describe('lastIndexOfFrom', function() {
  it('lastIndexOfFrom', function() {
    assert.equal(I.lastIndexOfFrom(0, 8, [1,8,8,3]), -1)
    assert.equal(I.lastIndexOfFrom(1, 8, [1,8,8,3]), 1)
    assert.equal(I.lastIndexOfFrom(2, 8, [1,8,8,3]), 2)
    assert.equal(I.lastIndexOfFrom(-1, 8, [1,8,8,3]), 2)
    assert.equal(I.lastIndexOfFrom(-2, 8, [1,8,8,3]), 2)
    assert.equal(I.lastIndexOfFrom(-3, 8, [1,8,8,3]), 1)
    assert.equal(I.lastIndexOfFrom(-4, 8, [1,8,8,3]), -1)

    assert.equal(I.lastIndexOfFrom(0, NaN, [1,NaN,NaN,3]), -1)
    assert.equal(I.lastIndexOfFrom(1, NaN, [1,NaN,NaN,3]), 1)
    assert.equal(I.lastIndexOfFrom(2, NaN, [1,NaN,NaN,3]), 2)
    assert.equal(I.lastIndexOfFrom(-1, NaN, [1,NaN,NaN,3]), 2)
    assert.equal(I.lastIndexOfFrom(-2, NaN, [1,NaN,NaN,3]), 2)
    assert.equal(I.lastIndexOfFrom(-3, NaN, [1,NaN,NaN,3]), 1)
    assert.equal(I.lastIndexOfFrom(-4, NaN, [1,NaN,NaN,3]), -1)
  })
})
