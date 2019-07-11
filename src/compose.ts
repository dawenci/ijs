import _arity from './internal/_arity'

const composeTwo = (f, g) => (v) => g(f(v))

function compose(...fns) {
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

export default compose
