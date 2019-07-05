export function curry1(fn) {
  return function curried(a?) {
    if (a !== undefined) return fn(a)
    return curried
  }
}

export function curry2(fn) {
  return function curried(a?, b?) {
    if (a !== undefined && b === undefined) {
      return curry1(b => fn(a, b))
    }
    if (a !== undefined && b !== undefined) {
      return fn(a, b)
    }
    return curried
  }
}

export function curry3(fn) {
  return function curried(a?, b?, c?) {
    if (a !== undefined && b === undefined && c === undefined) {
      return curry2((b, c) => fn(a, b, c))
    }
    if (a !== undefined && b !== undefined && c === undefined) {
      return curry1(c => fn(a, b, c))
    }
    if (a !== undefined && b !== undefined && c !== undefined) {
      return fn(a, b, c)
    }
    return curried
  }
}

function curryN(fn) {
  const len = fn.length
  return function() {
    const restCount = len - arguments.length
    if (restCount <= 0) return fn(...arguments as any)
    const args = [...arguments as any]
    if (restCount === 1) {
      return curry1(function (a) { return fn(...args, a) })
    }
    if (restCount === 2) {
      return curry2(function (a, b) { return fn(...args, a, b) })
    }
    if (restCount === 3) {
      return curry3(function (a, b, c) { return fn(...args, a, b, c) })
    }
    return curryN(function () { return fn(...args, ...arguments as any) })
  }
}

export function curry(fn) {
  switch(fn.length) {
    case 2: return curry2(fn)
    case 1: return curry1(fn)
    case 3: return curry3(fn)
    default: return curryN(fn)
  }
}

export default curry
