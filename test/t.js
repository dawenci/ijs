const assert = require('assert')
const I = require('../dist/cjs')

describe('t', function() {
  it('true', function() {
    assert.equal(I.t('any'), true)
  })
})
