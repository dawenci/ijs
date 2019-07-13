import { curry2 } from './curry'
import __ from './__'
import _fill from './internal/_fill'
import _arity from './internal/_arity'

const slice = Array.prototype.slice

// TODO, 性能

function partial(fn: (...args: any[]) => any, partialArgs: any[]): any {
  const arity = fn.length
  // 按照元数填充满占位符
  const appliedArgs = _fill(Array(arity), __)

  // 使用部分应用的参数替换对应位置的占位符
  const partialCount = partialArgs.length
  let placeholderCount = 0
  for (let index = 0; index < partialCount; index += 1) {
    const arg = partialArgs[index]
    if (arg === __) placeholderCount += 1
    appliedArgs[index] = arg
  }

  const partialFn = function() {
    const args = slice.call(arguments, 0)
    const size = args.length
    const allArgs = appliedArgs.slice()

    for (let index = 0; index < size; index += 1) {
      // 使用传入的参数，逐个替换掉占位符
      const holderIndex = allArgs.indexOf(__)
      if (holderIndex !== -1) {
        allArgs[holderIndex] = args[index]
        continue
      }

      // 填满占位符了，直接将传入的剩余参数，push 到末尾
      allArgs.push.apply(allArgs, args.slice(index))
      break
    }

    return fn.apply(void 0, allArgs)
  }

  const rest = arity - (partialCount - placeholderCount)
  if (rest <= 0) return partialFn

  return _arity(rest, partialFn)
}

export default curry2(partial)
