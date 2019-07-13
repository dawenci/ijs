import { Arity1, Arity2, Arity3, Arity4, Arity5, Arity6, Arity7, Arity8, Arity9, Arity10, ArityN } from '../curry/_types'

export type ArityType<P extends any[], R> = (...args: P) => 
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
    case 1: return function(a) { return arguments.length ? fn(a) : fn() }
    case 2: return function(a, b) {
      const l = arguments.length
      return !l ? fn() : l === 1 ? fn(a) : fn(a, b)
    } 
    case 3: return function(a,b,c) {
      const l = arguments.length
      return !l ? fn() : l === 1 ? fn(a) : l === 2 ? fn(a, b) : fn(a, b, c)
    }
    case 4: return function(a,b,c,d) {
      const l = arguments.length
      return !l ? fn() : l === 1 ? fn(a) : l === 2 ? fn(a,b) : l === 3 ? fn(a,b,c) : fn(a,b,c,d)
    } 
    case 5: return function(a,b,c,d,e) {
      const l = arguments.length
      return !l ? fn() : l === 1 ? fn(a) : l === 2 ? fn(a,b) : l === 3 ? fn(a,b,c) : l === 4 ? fn(a,b,c,d) : fn(a,b,c,d,e)
    } 
    case 6: return function(a,b,c,d,e,f) {
      const l = arguments.length
      return !l ? fn() : l===1 ? fn(a) : l===2 ? fn(a,b) : l===3 ? fn(a,b,c) : l===4 ? fn(a,b,c,d) : l===5? fn(a,b,c,d,e) : fn(a,b,c,d,e,f)
    }
    case 7: return function(a,b,c,d,e,f,g) {
      const l = arguments.length
      return !l ? fn() : l===1 ? fn(a) : l===2 ? fn(a,b) : l===3 ? fn(a,b,c) : l===4 ? fn(a,b,c,d) : l===5? fn(a,b,c,d,e) : l===6? fn(a,b,c,d,e,f) : fn(a,b,c,d,e,f,g)
    }
    case 8: return function(a,b,c,d,e,f,g,h) {
      const l = arguments.length
      return !l ? fn() : l===1 ? fn(a) : l===2 ? fn(a,b) : l===3 ? fn(a,b,c) : l===4 ? fn(a,b,c,d) : l===5? fn(a,b,c,d,e) : l===6? fn(a,b,c,d,e,f) : l===7?fn(a,b,c,d,e,f,g):fn(a,b,c,d,e,f,g,h)
    }
    case 9: return function(a,b,c,d,e,f,g,h,i) {
      const l = arguments.length
      return !l ? fn() : l===1 ? fn(a) : l===2 ? fn(a,b) : l===3 ? fn(a,b,c) : l===4 ? fn(a,b,c,d) : l===5? fn(a,b,c,d,e) : l===6? fn(a,b,c,d,e,f) : l===7?fn(a,b,c,d,e,f,g):l===8?fn(a,b,c,d,e,f,g,h):fn(a,b,c,d,e,f,g,h,i)
    } 
    case 10: return function(a,b,c,d,e,f,g,h,i,j) {
      const l = arguments.length
      return !l ? fn() : l===1 ? fn(a) : l===2 ? fn(a,b) : l===3 ? fn(a,b,c) : l===4 ? fn(a,b,c,d) : l===5? fn(a,b,c,d,e) : l===6? fn(a,b,c,d,e,f) : l===7?fn(a,b,c,d,e,f,g):l===8?fn(a,b,c,d,e,f,g,h):l===9?fn(a,b,c,d,e,f,g,h,i):fn(a,b,c,d,e,f,g,h,i,j)
    }
    default: return arityMany(n, fn)
  }
}

function arityMany(n, fn) {
  let params = []
  params.push('fn')
  let ret = `return function(`
  let index = -1
  while (++index < n) {
    ret += index === 0 ? `_${index}` : `,_${index}`
  }
  ret += `){return fn.apply(void 0,arguments)}`
  params.push(ret)
  const newFn = new Function(...params)
  return newFn(fn)
}

export default arity
