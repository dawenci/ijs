import _curry from './internal/_curry'

function curry(fn: (...args: any[]) => any) {
  return _curry(fn)
}

export default _curry(curry)
