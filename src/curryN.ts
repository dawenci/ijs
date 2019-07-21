import _curry from './internal/_curry'

function curry(artity: number, fn: (...args: any[]) => any) {
  return _curry(fn, artity)
}

export default _curry(curry)
