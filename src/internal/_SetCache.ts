const has = Object.prototype.hasOwnProperty
export default class _SameValueUniqCache {
  _strings: any
  _primitive: any
  _set: any
  constructor(initList?) {
    this._strings = Object.create(null)
    this._primitive = Object.create(null)
    this._set = new Set()
    if (initList && initList.length) {
      const len = initList.length
      for (let index = 0; index < len; index += 1) {
        this.add(initList[index])
      }
    }
  }

  has(item) {
    const type = typeof item
    if (type === 'string') {
      return !!has.call(this._strings, item)
    }
    // -0
    if (type === 'number' && 1 / item === -Infinity) {
      return has.call(this._primitive, '-0')
    }
    if (type === 'number' || item == null || type === 'symbol') {
      return !!has.call(this._primitive, item)
    }
    // 其他对象
    return this._set.has(item)
  }

  add(item) {
    const type = typeof item
    if (type === 'string') {
      this._strings[item] = item
      return
    }
    // -0
    if (type === 'number' && 1 / item === -Infinity) {
      this._primitive['-0'] = -0
      return
    }
    if (type === 'number' || item == null || type === 'symbol') {
      this._primitive[item] = item
      return
    }
    // 其他对象
    this._set.add(item)
  }

  remove(item) {
    const type = typeof item
    if (type === 'string') {
      delete this._strings[item]
      return
    }
    // -0
    if (type === 'number' && 1 / item === -Infinity) {
      delete this._primitive['-0']
      return
    }
    if (type === 'number' || item == null || type === 'symbol') {
      delete this._primitive[item]
      return
    }
    // 其他对象
    this._set.delete(item)
  }
}
