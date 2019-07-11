import { curry1 } from './curry'

const reFlags = /\w*$/
function cloneRegExp(regexp) {
  const result = new regexp.constructor(regexp.source, reFlags.exec(regexp))
  result.lastIndex = regexp.lastIndex
  return result
}

// 深拷贝
function cloneDeep(obj) {
  if (obj === undefined || obj === null) return obj
  
  // 原始类型复制赋值，函数直接引用
  const type = typeof obj
  if (type === 'string'
    || type === 'number'
    || type === 'boolean'
    || type === 'undefined'
    || type === 'symbol'
    || obj === null
    || type === 'function'
  ) {
    return obj
  }

  if (obj instanceof Number) return new Number(obj)
  if (obj instanceof String) return new String(obj)
  if (obj instanceof Boolean) return new String(obj)

  if (Array.isArray(obj)) {
    const arrayCopy = []
    const size = obj.length
    // 递归拷贝数组的每一项
    for (let index = 0; index < size; index += 1) {
      const item = obj[index]
      // 循环引用
      if (item === obj) {
        arrayCopy.push(arrayCopy)
        continue;
      }
      arrayCopy.push(cloneDeep(item))
    }
    return arrayCopy;
  }

  // 正则对象
  if (obj instanceof RegExp) {
    return cloneRegExp(obj)
  }

  // 日期对象
  if (obj instanceof Date) {
    return new Date(obj.getTime())
  }

  if (typeof Map === 'function' && obj instanceof Map) {
    return new Map(obj.entries())
  }

  if (typeof Set === 'function' && obj instanceof Set) {
    return new Set(obj.values())
  }

  // TODO
  // DOM Node, File, FileList, ArrayBuffer, ArrayBufferView, ImageData

  // 普通对象
  const result: any = {}

  // 递归处理每一个属性
  for (let prop in obj) {
    const value = obj[prop]
    // 循环引用
    if (value === obj) {
      result[prop] = result
      continue
    }
    result[prop] = cloneDeep(value)
  }
  return result
}

export default curry1(cloneDeep)
