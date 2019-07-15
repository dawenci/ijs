const has = Object.prototype.hasOwnProperty

export default function _merge(output, to, from) {
  const isOutputArray = Array.isArray(output)
  if (to == null && from == null) return output
  to = to == null ? isOutputArray ? [] : {} : Object(to)
  from = from == null ? isOutputArray ? [] : {} : Object(from)

  // 处理 to 的数据
  for (let prop in to) {
    const toVal = to[prop]

    // 如果是 from 中没有该属性，使用 to 的值
    if (!(prop in from)) {
      output[prop] = toVal
      continue
    }

    const fromVal = from[prop]

    // 如果 from 中的属性值是原始类型（ 包括 undefined ），则直接覆盖
    if ((typeof fromVal !== 'object' && typeof fromVal !== 'function') || fromVal === null) {
      output[prop] = fromVal
      continue
    }

    // 是否使用数组，取决于第一个对象的值是否为数组
    const propOutput = Array.isArray(toVal) ? [] : {}

    // 对象合并
    output[prop] = _merge(propOutput, toVal, fromVal)
  }

  // 处理 from 的数据
  for (let prop in from) {
    // 上一轮遍历 from 时，已经合并的值，直接跳过
    if (has.call(output, prop)) continue
    output[prop] = from[prop]
  }
 
  return output
}
