import { curry } from '../curry'
import _reduce from './_reduce'

// TODO, result type
function pipeWith(
  withFn: (fn: (value: any) => any, value: any) => any,
  fnList: Array<(...args: any[]) => any>
) {
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
      case 1: return withFn(tail[0], value)
      case 2: return withFn(tail[1], withFn(tail[0], value))
      case 3: return withFn(tail[2], withFn(tail[1], withFn(tail[0], value)))
      case 4: return withFn(tail[3], withFn(tail[2], withFn(tail[1], withFn(tail[0], value))))
      default: {
        for (let index = 0; index < tailSize; index += 1) {
          value = withFn(tail[index], value)
        }
        return value
      }
    }
  }, first.length)
}

export default pipeWith
