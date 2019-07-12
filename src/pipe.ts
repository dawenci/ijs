import _arity from './internal/_arity'
import curry1 from './curry'

const chaineTwo = (f, g) => (v) => g(f(v))

// TODO, result type

/**
 * 创建一个函数管道，参数列表中第一个函数为入口，
 * 入口可以接受多个参数，其他函数接受一个函数（接受前一个函数的返回值）
 * 
 * @param {Array<(...args: any[]) => any>} fns 函数列表
 * @see I.compose
 */
function pipe(fns: Array<(...args: any[]) => any>) {
  const size = fns.length
  if (!size) throw new Error('pipe 需要至少一个参数')

  // 第一个函数为入口，如果只有一个函数，直接包装返回
  let entrance = fns[0]
  entrance = _arity(entrance.length, entrance)
  if (size === 1) return entrance

  // 第二个开始，逐个嵌套
  let chained = fns[1]
  let index = 1
  while (++index < size) {
    chained = chaineTwo(chained, fns[index])
  }

  return function() {
    return chained(entrance.apply(void 0, arguments))
  }
}

export default curry1(pipe)
