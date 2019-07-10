import { Arity1, Arity2, Arity3, Arity4, Arity5, Arity6, Arity7, Arity8, Arity9, Arity10, ArityN } from '../curry/types'
import { Cast, Length } from '../_typeUtils'

type ArityType<P extends any[], R> = (...args: P) => 
  P extends [infer A] ? Arity1<A, R>
  : P extends [infer A, infer B] ? Arity2<A, B, R>
  : P extends [infer A, infer B, infer C] ? Arity3<A,B,C, R>
  : P extends [infer A, infer B, infer C, infer D] ? Arity4<A,B,C,D, R>
  : P extends [infer A, infer B, infer C, infer D, infer E] ? Arity5<A,B,C,D,E, R>
  : P extends [infer A, infer B, infer C, infer D, infer E, infer F] ? Arity6<A,B,C,D,E,F, R>
  : P extends [infer A, infer B, infer C, infer D, infer E, infer F, infer G] ? Arity7<A,B,C,D,E,F,G, R>
  : P extends [infer A, infer B, infer C, infer D, infer E, infer F, infer G, infer H] ? Arity8<A,B,C,D,E,F,G,H, R>
  : P extends [infer A, infer B, infer C, infer D, infer E, infer F, infer G, infer H, infer I] ? Arity9<A,B,C,D,E,F,G,H,I, R>
  : P extends [infer A, infer B, infer C, infer D, infer E, infer F, infer G, infer H, infer I, infer J] ? Arity10<A,B,C,D,E,F,G,H,I,J, R>
  : ArityN<P, R>;

function arity<P extends any[], R>(n: number, fn: (...args: P) => R): ArityType<P, R>
function arity(n: number, fn) {
  switch (n) {
    case 1: return (a) => fn(a)
    case 2: return (a,b) => fn(a,b)
    case 3: return (a,b,c) => fn(a,b,c)
    case 4: return (a,b,c,d) => fn(a,b,c,d)
    case 5: return (a,b,c,d,e) => fn(a,b,c,d,e)
    case 6: return (a,b,c,d,e,f) => fn(a,b,c,d,e,f)
    case 7: return (a,b,c,d,e,f,g) => fn(a,b,c,d,e,f,g)
    case 8: return (a,b,c,d,e,f,g,h) => fn(a,b,c,d,e,f,g,h)
    case 9: return (a,b,c,d,e,f,g,h,i) => fn(a,b,c,d,e,f,g,h,i)
    case 10: return (a,b,c,d,e,f,g,h,i,j) => fn(a,b,c,d,e,f,g,h,i,j)

    default: {
      let params = []
      params.push('fn')
      let ret = `return function(`
      let index = -1
      while (++index < n) {
        ret += index === 0 ? `_${index}` : `,_${index}`
      }
      ret += '){return fn('
      index = -1
      while (++index < n) {
        ret += index === 0 ? `_${index}` : `, _${index}`
      }
      ret += ')}'
      params.push(ret)
      const newFn = new Function(...params)
      return newFn(fn)
    }
  }
}

export default arity
