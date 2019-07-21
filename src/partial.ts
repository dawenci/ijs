import { _curry2 } from './internal/_curry'
import _ from './_'
import _fill from './internal/_fill'
import _arity from './internal/_arity'
import _reduce from './internal/_reduce'

const slice = Array.prototype.slice
const count = (list) => _reduce((count, arg) => (arg === _ ? count : count + 1), 0, list)
const copyArgs = (args) => (args || []).slice()

function partial(fn: (...args: any[]) => any, partialArgs: any[]): any {
  const arity = fn.length
  const filteredArgs = copyArgs(partialArgs)

  // 部分应用的参数，末尾是占位符的话，没有意义，直接移除即可。
  while (filteredArgs[filteredArgs.length - 1] === _) {
    filteredArgs.pop()
  }
  if (!filteredArgs.length) return fn

  const appliedCount = count(filteredArgs)

  const newFn = function() {
    // 复制，以免修改外部变量，影响其他闭包实例
    let args = copyArgs(filteredArgs)
    let holderCout = args.length - appliedCount
    const size = arguments.length
    for (let index = 0; index < size; index += 1) {
      // 使用传入的参数，逐个替换掉占位符
      if (holderCout--) {
        args[args.indexOf(_)] = arguments[index]
        continue
      }

      // 填满占位符了，直接将传入的剩余参数，push 到末尾
      args = args.concat(slice.call(arguments, index))
      break
    }
    return fn.apply(void 0, args)
  }

  return arity >= appliedCount ? _arity(arity - appliedCount, newFn) : newFn
}

export default _curry2(partial)
