import _curry, { _curry1 } from './internal/_curry'

function thunkify<P extends any[], R>(fn: (...args: P) => R) {
  function wrap(): () => R {
    const args  = arguments
    return () => fn.apply(void 0, args)
  }

  return _curry<P, () => R>(wrap, fn.length)
}

export default _curry1(thunkify)
