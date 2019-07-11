import _arity from './internal/_arity'

const chaineTwo = (f, g) => (v) => g(f(v))

function pipe(...fns) {
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

export default pipe
