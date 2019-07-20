import { curry } from '../curry'

// pipe 多个函数
export function _pipe(fnList: Array<(...args: any[]) => any>) {
  // 第一个函数为入口
  const first = fnList[0]
  if (fnList.length === 1) return curry(first)
  
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
