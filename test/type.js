const assert = require('assert')
const I = require('../dist/cjs')

describe('type', function() {
  it('类型测试', () => {
    [
      {value: undefined, type: 'Undefined' },
      {value: null, type: 'Null' },
      {value: 1, type: 'Number' },
      {value: new Number(), type: 'Number' },      
      {value: '1', type: 'String' },
      {value: new String(), type: 'String' },
      {value: Symbol(), type: 'Symbol' },
      {value: true, type: 'Boolean' },
      {value: false, type: 'Boolean' },
      {value: new Boolean(), type: 'Boolean' },
      {value: new Date(), type: 'Date' },
      {value: /reg/, type: 'RegExp' },
      {value: {}, type: 'Object' },
      {value: [], type: 'Array' },
      {value: new Map(), type: 'Map' },
      {value: new Set(), type: 'Set' },
    ].forEach(test => {
      assert.equal(I.type(test.value), test.type)
    })
  })
})
