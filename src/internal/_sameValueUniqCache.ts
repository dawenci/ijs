export default class _SameValueUniqCache {
  strings: any
  others: any
  list: any
  constructor(initList?) {
    this.strings = {}
    this.others = {}
    this.list = []
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
      return !!this.strings.hasOwnProperty(item)
    }
    // -0
    if (type === 'number' && 1 / item === -Infinity) {
      return this.others.hasOwnProperty('-0')
    }
    if (type === 'number' || item == null || type === 'symbol') {
      return !!this.others.hasOwnProperty(item)
    }
    // 其他对象
    return this.list.indexOf(item) !== -1
  }

  add(item) {
    const type = typeof item
    if (type === 'string') {
      this.strings[item] = item
      return
    }
    // -0
    if (type === 'number' && 1 / item === -Infinity) {
      this.others['-0'] = -0
      return
    }
    if (type === 'number' || item == null || type === 'symbol') {
      this.others[item] = item
      return
    }
    // 其他对象
    if (this.list.indexOf(item) === -1) this.list.push(item)
  }
}
