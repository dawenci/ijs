const assert = require('assert')
const I = require('../dist/cjs')

describe('intersection', function() {

  it('识别 NaN', function() {
    // NaN assert.deepEqual 不能判为相等
    assert.ok(I.equals(I.intersection([NaN], [NaN]), [NaN]))
  })

  it('区分原始类型及其包装类型', function() {
    assert.deepEqual(I.intersection([ new Number(1) ], [1]), [])
    assert.deepEqual(I.intersection([ new String('1') ], ['1']), [])
    assert.deepEqual(I.intersection([ new Boolean(true) ], [true]), [])
  })

  it('结果无重复', function() {
    const data = [NaN,1, '1', undefined, null,Symbol(), {}, [], ()=>null, /regexp/, new Date(), new Number(), new String(), Infinity, -Infinity]
    const dataX2 = []
    data.forEach(i => dataX2.push(i, i))

    // NaN assert.deepEqual 不能判为相等
    assert.ok(I.equals(I.intersection(dataX2, dataX2), data))
  })

})
