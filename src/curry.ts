// `Head` takes a tuple type `T` and returns the first type that it contains.
// This way, we'll be able to know what argument type has to be taken at a time.
export type Head<T extends any[]> = T extends [any, ...any[]] ? T[0] : never    

export type Last<T extends any[]> = {
  0: Last<Tail<T>>
  1: Head<T>
}[HasTail<T> extends true ? 0 : 1]

export type Tail<T extends any[]> =
  ((...t: T) => any) extends ((_: any, ...tail: infer TT) => any) ? TT : []

export type HasTail<T extends any[]> =
  T extends ([] | [any]) ? false : true

export type Cast<X, Y> = X extends Y ? X : Y

export type Prepend<E, T extends any[]> =
  ((head: E, ...args: T) => any) extends ((...args: infer U) => any) ? U : T

export type Drop<N extends number, T extends any[], I extends any[] = []> = {
  0: Drop<N, Tail<T>, Prepend<any, I>>
  1: T
}[Length<I> extends N ? 1  : 0]
  
export type Length<T extends any[]> = T['length']
export type Pos<I extends any[]> = Length<I>
export type Next<I extends any[]> = Prepend<any, I>
export type Prev<I extends any[]> = Tail<I>
export type Iterator<Index extends number = 0, From extends any[] = [], I extends any[] = []> = {
  0: Iterator<Index, Next<From>, Next<I>>
  1: From
}[Pos<I> extends Index ? 1 : 0]

export type Reverse<T extends any[], R extends any[] = [], I extends any[] = []> = {
  0: Reverse<T, Prepend<T[Pos<I>], R>, Next<I>>
  1: R
}[Pos<I> extends Length<T> ? 1 : 0]

export type Concat<T1 extends any[], T2 extends any[]> =
  Reverse<Reverse<T1> extends infer R ? Cast<R, any[]> : never, T2>

export type Append<E, T extends any[]> =
  Concat<T, [E]>

export type Params<F extends (...args: any[]) => any> = 
  F extends ((...args: infer A) => any) ? A : never

const slice = Array.prototype.slice

/**
 * 1 个参数的函数柯里化
 */
interface Curried1<A, R> {
  (): Curried1<A, R>
  (a: A | undefined): R
}
export function curry1<A, R>(fn: (a: A) => R): Curried1<A, R> {
  function curried(): Curried1<A, R>
  function curried(a: A | undefined): R
  function curried(a?: A | undefined) {
    if (arguments.length) {
      return fn(a)
    }
    return curried
  }
  return curried
}
// const T1_1 = curry1((a: number) => a)
// const T1_1_1 = T1_1(3)


/**
 * 2 个参数的函数柯里化
 */
interface Curried2<A, B, R> {
  (): Curried2<A, B, R>
  (a: A | undefined): Curried1<B, R>
  (a: A | undefined, b: B | undefined): R
}
export function curry2<A, B, R>(fn: (a: A, b: B) => R): Curried2<A, B, R> {
  function curried(): Curried2<A, B, R>
  function curried(a: A | undefined): Curried1<B, R>
  function curried(a: A | undefined, b: B | undefined): R

  function curried(a?: A | B | undefined, b?: B | undefined) {
    switch (arguments.length) {
      case 1: return curry1<B, R>((b) => fn(a as A, b))
      case 2: return fn(a as A, b)
      case 0: return curried
      default: return fn(a as A, b)
    }
  }

  return curried
}

// const T2_1 = curry2((a: number, b: string) => a + b)
// const T2_1_1 = T2_1(3)
// const T2_1_2 = T2_1_1('4')


/**
 * 3 个参数的函数柯里化
 */
interface Curried3<A, B, C, R> {
  (): Curried3<A, B, C, R>
  (a: A | undefined): Curried2<B, C, R>
  (a: A | undefined, b: B | undefined): Curried1<C, R>
  (a: A | undefined, b: B | undefined, c: C | undefined): R
}
export function curry3<A, B, C, R>(fn: (a: A, b: B, c: C) => R): Curried3<A, B, C, R>  {
  function curried(): Curried3<A, B, C, R>
  function curried(a: A | undefined): Curried2<B, C, R>
  function curried(a: A | undefined, b: B | undefined): Curried1<C, R>
  function curried(a: A | undefined, b: B | undefined, c: C | undefined): R

  function curried(a?: A | B | C | undefined, b?: B | C | undefined, c?: C | undefined) {
    switch(arguments.length) {
      case 1: return curry2<B, C, R>((b, c) => fn(a as A, b, c))
      case 2: return curry1<C, R>((c) => fn(a as A, b as B, c))
      case 3: return fn(a as A, b as B, c as C)
      case 0: return curried
      default: return fn(a as A, b as B, c as C)
    }
  }

  return curried
}

// const T3_1 = curry3((a: number, b: string, c: string) => a + b + c)
// const T3_1_1 = T3_1(3)
// const T3_1_2 = T3_1_1('4')
// const T3_1_3 = T3_1_2('5')


// N 个参数的函数柯里化
type CurriedN<P extends any[], R> =
  <T extends any[]>(...args: Cast<T, Partial<P>>) =>
    // A.1 剩余参数数量只有一个，则走 curry1
    Drop<Length<T>, P> extends [infer A] ? Curried1<Cast<A, any>, R>
    // A.2 剩余参数如果有两个，走 curry2
    : Drop<Length<T>, P> extends [infer A, infer B] ? Curried2<Cast<A, any>, Cast<B, any>, R>
      // A.3 剩余参数如果编译 3个，走 curry3
      : Drop<Length<T>, P> extends [infer A, infer B, infer C] ? Curried3<Cast<A, any>, Cast<B, any>, Cast<C, any>, R>
        // 剩余更多参数，走 curryN
        : Drop<Length<T>, P> extends [any, ...any[]] ? CurriedN<Drop<Length<T>, P> extends infer DT ? Cast<DT, any[]> : never, R>
    // B. 没有剩余参数可消耗，则返回最终结果
    : R
export function curryN<P extends any[], R>(fn: (...args: P) => R, n: number): CurriedN<P, R> {
  return function() {
    const consumedN = arguments.length
    const restN = n - consumedN

    if (restN <= 0) {
      return fn.apply(void 0, arguments)
    }

    const args = slice.call(arguments)
    if (restN === 1) {
      const curried = curry1(function(a) {
        args.push(a)
        return fn.apply(void 0, args)
      })
      return curried
    } 

    if (restN === 2) {
      const curried = curry2(function (a, b) {
        args.push(a, b)
        return fn.apply(void 0, args)
      })
      return curried
    } 

    if (restN === 3) {
      const curried = curry3(function (a, b, c) {
        args.push(a, b, c)
        return fn.apply(void 0, args)
      })
      return curried
    }

    return curryN(function() {
      args.push.apply(args, arguments)
      return fn.apply(void 0, args)
    }, restN)
  }
}

// const T_N_1 = curryN((a: number) => a, 1)
// const T_N_1_1 = T_N_1(1)

/**
 * 柯里化
 */
export function curry<P extends any[], R>(fn: (() => R)): typeof fn
export function curry<P extends any[], R>(fn: ((a: P[0]) => R)): Curried1<P[0], R>
export function curry<P extends any[], R>(fn: ((a: P[0], b: P[1]) => R)): Curried2<P[0], P[1], R>
export function curry<P extends any[], R>(fn: ((a: P[0], b: P[1], c: P[2]) => R)): Curried3<P[0], P[1], P[2], R>
export function curry<P extends any[], R>(fn: ((...args: P) => R)): CurriedN<P, R>

export function curry(fn) {
  const length = fn.length
  switch(length) {
    case 2: return curry2(fn)
    case 1: return curry1(fn)
    case 3: return curry3(fn)
    case 0: return fn
    default: return curryN(fn, length)
  }
}
const T_C_1 = curry((a: number) => a)
const T_C_1_1 = T_C_1(1)


export default curry
