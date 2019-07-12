import _arity from './internal/_arity'
import curry1 from './curry'

const composeTwo = (f, g) => (v) => g(f(v))

// TODO, result type

/**
 * 创建一个函数组合，参数列表中最后一个函数为入口，
 * 入口可以接受多个参数，其他函数接受一个函数（接受前一个函数的返回值）
 * 
 * @param {Array<(...args: any[]) => any>} fns 函数列表
 * @see I.pipe
 */
function compose(fns: Array<(...args: any[]) => any>) {
  const size = fns.length
  if (!size) throw new Error('compose 需要至少一个参数')

  // 末尾一个函数为入口，如果只有一个函数，直接包装返回
  let entrance = fns.pop()
  entrance = _arity(entrance.length, entrance)
  if (size === 1) return entrance

  // 倒数第二个开始，逐个嵌套
  let composed = fns.pop()
  while (fns.length) {
    composed = composeTwo(composed, fns.pop())
  }

  return function() {
    return composed(entrance.apply(void 0, arguments))
  }
}

export default curry1(compose)
