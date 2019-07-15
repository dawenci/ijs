const slice = Array.prototype.slice

export default function <E, R>(iteratee: (element: E, ...rest) => R, coll: ArrayLike<E>): Array<R> {
  coll = coll || []
  switch (arguments.length) {
    case 2: {      
      const len = coll.length || 0
      const results = Array(len)
      for (let index = 0; index < len; index += 1) {
        results[index] = iteratee(coll[index])
      }
      return results
    }
    case 3: {
      const coll2 = arguments[2]
      const len = Math.min(coll.length, coll2.length)
      const results = Array(len)
      for (let index = 0; index < len; index += 1) {
        results[index] = iteratee(coll[index], coll2[index])
      }
      return results
    }
    default: {
      const colls = slice.call(arguments, 1)
      const len = Math.min.apply(Math, colls.map(coll => coll.length))
      const results = Array(len)
      for (let index = 0; index < len; index += 1) {
        results[index] = iteratee.apply(void 0, colls.map(coll => coll[index]))
      }
      return results
    }
  }
}
