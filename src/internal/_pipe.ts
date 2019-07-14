import { curry } from '../curry'
import _reduce from './_reduce'

// TODO, result type
function pipe(fnList: Array<(...args: any[]) => any>) {
  const size = fnList.length
  if (!size) throw new Error('pipe 需要至少一个参数')

  // 第一个函数为入口，如果只有一个函数，直接包装返回
  const first = fnList[0]
  if (size === 1) return curry(first)

  const tail = fnList.slice(1)
  const tailSize = tail.length

  return curry(function() {
    let value = first.apply(void 0, arguments)

    // 只有 5 个以内函数的，直接计算返回
    switch(tailSize) {
      case 1: return tail[0](value)
      case 2: return tail[1](tail[0](value))
      case 3: return tail[2](tail[1](tail[0](value)))
      case 4: return tail[3](tail[2](tail[1](tail[0](value))))
      default: {
        for (let index = 0; index < tailSize; index += 1) {
          value = tail[index](value)
        }
        return value
      }
    }
  }, first.length)
}

export default pipe
