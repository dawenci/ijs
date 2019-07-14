import { curry, curry1 } from '../curry'
import _reduce from './_reduce'

// pipe 两个函数，假设两个函数都存在，入口需要判断处理
export function _pipe(first, second?) {
  const arity1 = first.length
  return curry(function() {
    switch(arguments.length) {
      case 1: return second(first(arguments[0]))
      case 2: return second(first(arguments[0], arguments[1]))
      case 3: return second(first(arguments[0], arguments[1], arguments[3]))
      default: return second(first.apply(void 0, arguments))
    }
  }, arity1)
}

// pipe 多个函数
export function _pipeAll(fnList: Array<(...args: any[]) => any>) {
  // 第一个函数为入口
  const first = fnList[0]
  // 假设 tail 不为空，入口需要判断处理
  const tail = fnList.slice(1)
  const tailSize = tail.length

  return curry(function() {
    let value
    switch(arguments.length) {
      case 1: value = first(arguments[0]); break
      case 2: value = first(arguments[0], arguments[1]); break
      case 3: value = first(arguments[0], arguments[1], arguments[3]); break
      default: value = first.apply(void 0, arguments)
    }

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

export function _pipeWith(
  withFn: (fn: (value: any) => any, value: any) => any,
  fnList: Array<(...args: any[]) => any>
) {
  const size = fnList.length

  // 第一个函数为入口，如果只有一个函数，直接包装返回
  const first = fnList[0]
  if (size === 1) return curry(first)

  const tail = fnList.slice(1)
  const tailSize = tail.length

  return curry(function() {
    let value
    switch(arguments.length) {
      case 1: value = first(arguments[0]); break
      case 2: value = first(arguments[0], arguments[1]); break
      case 3: value = first(arguments[0], arguments[1], arguments[3]); break
      default: value = first.apply(void 0, arguments)
    }

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
