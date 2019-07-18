import _sameValue from './_sameValue'
import _isPrimitive from './_isPrimitive'
import _type from './_type'
import _keys from './_keys'

function equals(a, b): boolean {
  // 同值，返回
  if (_sameValue(a, b)) return true
  // 非同值，原始类型，返回 false
  if (_isPrimitive(a)) return false

  // 处理对象类型
  // new String(3), '3'
  if (typeof a !== typeof b) return false

  const type = _type(a)
  if (type !== _type(b)) return false
  switch (type) {
    case 'Array': {
      const size = a.length
      if (size !== b.length) return false
      for (let index = 0;index < size; index += 1) {
        if (!equals(a[index], b[index])) return false
      }
      return true
    }
    case 'Date': return a.getTime() === b.getTime()
    case 'RegExp':
    case 'Number':
    case 'Boolean':
    case 'String': return a.toString() === b.toString()
    case 'Set': {
      if (a.size !== b.size) return false
      return equals([...a.values()], [...b.values()])
    }    
    case 'Map': {
      if (a.size !== b.size) return false
      return equals([...a.keys()], [...b.keys()]) && equals([...a.values()], [...b.values()])
    }
    default: {
      const keys = _keys(a)
      if (!equals(keys, _keys(b))) return false;
      const size = keys.length
      for (let index = 0; index < size; index += 1) {
        const key = keys[index]
        if (!equals(a[key], b[key])) return false
      }
      return true
    }
  }
}

export default equals
