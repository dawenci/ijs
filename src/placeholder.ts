import curry, { Curry, Curry1, Curry2, Curry3, Curry4, _CURRY_ } from './curry'

export const __ = (placeholder) => placeholder === __

function placeholder(fn) {
  if (arguments.length == 0) return placeholder
  const n = fn[_CURRY_] || fn.length
  if (n === 0) return fn
  if (n === 1) {
    const c1 = curry((a) => {
      if (a === __) return c1
      return fn(a)
    })
    return c1
  }

  if (n === 2) {
    const c2 = curry((a, b) => {
      if (a === __ && b === __) return c2
      if (a === __) return placeholder((a) => fn(a, b))
      return fn(b, a)
    })
    return c2
  }

  if (n === 3) {
    const c3 = curry((a, b, c) => {
      if (a === __ && b === __ && c === __) return c3
      if (a === __ && b === __) return placeholder((a, b) => fn(a, b, c))
      if (a === __ && c === __) return placeholder((a, c) => fn(a, b, c))
      if (b === __ && c === __) return placeholder((b, c) => fn(a, b, c))
      if (a === __) return placeholder(a => fn(a, b, c))
      if (b === __) return placeholder(b => fn(a, b, c))
      if (c === __) return placeholder(c => fn(a, b, c))
      return fn(b, a, c)
    })
    return c3
  }

  if (n === 4) {
    const c4 = curry((a, b, c, d) => {
      if (a === __ && b === __ && c === __ && d === __) return c4
      if (a === __ && b === __ && c === __) return placeholder((a, b, c) => fn(a, b, c, d))
      if (a === __ && b === __ && d === __) return placeholder((a, b, d) => fn(a, b, c, d))
      if (a === __ && c === __ && d === __) return placeholder((a, c, d) => fn(a, b, c, d))
      if (b === __ && c === __ && d === __) return placeholder((b, c, d) => fn(a, b, c, d))
      if (a === __ && b === __) return placeholder((a, b) => fn(a, b, c, d))
      if (a === __ && c === __) return placeholder((a, c) => fn(a, b, c, d))
      if (a === __ && d === __) return placeholder((a, d) => fn(a, b, c, d))
      if (b === __ && c === __) return placeholder((b, c) => fn(a, b, c, d))
      if (b === __ && d === __) return placeholder((b, d) => fn(a, b, c, d))
      if (c === __ && d === __) return placeholder((c, d) => fn(a, b, c, d))
      if (a === __) return placeholder(a => fn(a, b, c, d))
      if (b === __) return placeholder(b => fn(a, b, c, d))
      if (c === __) return placeholder(c => fn(a, b, c, d))
      if (d === __) return placeholder(d => fn(a, b, c, d))
      return fn(b, a, c, d)
    })
    return c4
  }

  return curry(function() {
    
  })

  const flipped = curry(function() {
    const args = slice.call(arguments)
    const firstArg = args[0]
    args[0] = args[1]
    args[1] = firstArg
    return fn.apply(void 0, args)
  })()
  return flipped
}
