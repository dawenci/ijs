export default class _SameValueUniqCache {
  _strings: any
  _primitive: any
  _set: any
  constructor(initList?) {
    this._strings = {}
    this._primitive = {}
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
      return !!this._strings.hasOwnProperty(item)
    }
    // -0
    if (type === 'number' && 1 / item === -Infinity) {
      return this._primitive.hasOwnProperty('-0')
    }
    if (type === 'number' || item == null || type === 'symbol') {
      return !!this._primitive.hasOwnProperty(item)
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
