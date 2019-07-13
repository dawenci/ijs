import curry, { curry1 } from './curry'

function thunkify<P extends any[], R>(fn: (...args: P) => R) {
  function wrap(): () => R {
    const args  = arguments
    return () => fn.apply(void 0, args)
  }

  return curry<P, () => R>(wrap, fn.length)
}

export default curry1(thunkify)
