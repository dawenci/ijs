import { Cast, Drop, Length } from '../_typeUtils'

export type Arity1<A, R> = (a: A) => R
export type Arity2<A, B, R> = (a: A, b: B) => R
export type Arity3<A, B, C, R> = (a: A, b: B, c: C) => R
export type Arity4<A, B, C, D, R> = (a: A, b: B, c: C, d: D) => R
export type Arity5<A, B, C, D, E, R> = (a: A, b: B, c: C, d: D, e: E) => R
export type Arity6<A, B, C, D, E, F, R> = (a: A, b: B, c: C, d: D, e: E, f: F) => R
export type Arity7<A, B, C, D, E, F, G, R> = (a: A, b: B, c: C, d: D, e: E, f: F, g: G) => R
export type Arity8<A, B, C, D, E, F, G, H, R> = (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H) => R
export type Arity9<A, B, C, D, E, F, G, H, I, R> = (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I) => R
export type Arity10<A, B, C, D, E, F, G, H, I, J, R> = (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I, j: J) => R
export type ArityN<P extends any[], R> = (...args:P)=>R

export interface Curry1<A, R> {
  (): Curry1<A, R>
  (a: A): R
}

export interface Curry2<A, B, R> {
  (): Curry2<A, B, R>
  (a: A): Curry1<B, R>
  (a: A, b: B): R
}

export interface Curry3<A, B, C, R> {
  (): Curry3<A, B, C, R>
  (a: A): Curry2<B, C, R>
  (a: A, b: B): Curry1<C, R>
  (a: A, b: B, c: C): R
}

export interface Curry4<A, B, C, D, R> {
  (): Curry4<A, B, C, D, R>
  (a: A): Curry3<B, C, D, R>
  (a: A, b: B): Curry2<C, D, R>
  (a: A, b: B, c: C): Curry1<D, R>
  (a: A, b: B, c: C, d: D): R
}

export interface Curry5<A, B, C, D, E, R> {
  (): Curry5<A, B, C, D, E, R>
  (a: A): Curry4<B, C, D, E, R>
  (a: A, b: B): Curry3<C, D, E, R>
  (a: A, b: B, c: C): Curry2<D, E, R>
  (a: A, b: B, c: C, d: D): Curry1<E, R>
  (a: A, b: B, c: C, d: D, e: E): R
}

export interface Curry6<A, B, C, D, E, F, R> {
  (): Curry6<A, B, C, D, E, F, R>
  (a: A): Curry5<B, C, D, E, F, R>
  (a: A, b: B): Curry4<C, D, E, F, R>
  (a: A, b: B, c: C): Curry3<D, E, F, R>
  (a: A, b: B, c: C, d: D): Curry2<E, F, R>
  (a: A, b: B, c: C, d: D, e: E): Curry1<F, R>
  (a: A, b: B, c: C, d: D, e: E, f: F): R
}

export interface Curry7<A, B, C, D, E, F, G, R> {
  (): Curry7<A, B, C, D, E, F, G, R>
  (a: A): Curry6<B, C, D, E, F, G, R>
  (a: A, b: B): Curry5<C, D, E, F, G, R>
  (a: A, b: B, c: C): Curry4<D, E, F, G, R>
  (a: A, b: B, c: C, d: D): Curry3<E, F, G, R>
  (a: A, b: B, c: C, d: D, e: E): Curry2<F, G, R>
  (a: A, b: B, c: C, d: D, e: E, f: F): Curry1<G, R>
  (a: A, b: B, c: C, d: D, e: E, f: F, g: G): R
}

export interface Curry8<A, B, C, D, E, F, G, H, R> {
  (): Curry8<A, B, C, D, E, F, G, H, R>
  (a: A): Curry7<B, C, D, E, F, G, H, R>
  (a: A, b: B): Curry6<C, D, E, F, G, H, R>
  (a: A, b: B, c: C): Curry5<D, E, F, G, H, R>
  (a: A, b: B, c: C, d: D): Curry4<E, F, G, H, R>
  (a: A, b: B, c: C, d: D, e: E): Curry3<F, G, H, R>
  (a: A, b: B, c: C, d: D, e: E, f: F): Curry2<G, H, R>
  (a: A, b: B, c: C, d: D, e: E, f: F, g: G): Curry1<H, R>
  (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H): R
}

export interface Curry9<A, B, C, D, E, F, G, H, I, R> {
  (): Curry9<A, B, C, D, E, F, G, H, I, R>
  (a: A): Curry8<B, C, D, E, F, G, H, I, R>
  (a: A, b: B): Curry7<C, D, E, F, G, H, I, R>
  (a: A, b: B, c: C): Curry6<D, E, F, G, H, I, R>
  (a: A, b: B, c: C, d: D): Curry5<E, F, G, H, I, R>
  (a: A, b: B, c: C, d: D, e: E): Curry4<F, G, H, I, R>
  (a: A, b: B, c: C, d: D, e: E, f: F): Curry3<G, H, I, R>
  (a: A, b: B, c: C, d: D, e: E, f: F, g: G): Curry2<H, I, R>
  (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H): Curry1<I, R>
  (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I): R
}

export interface Curry10<A, B, C, D, E, F, G, H, I, J, R> {
  (): Curry10<A, B, C, D, E, F, G, H, I, J, R>
  (a: A): Curry9<B, C, D, E, F, G, H, I, J, R>
  (a: A, b: B): Curry8<C, D, E, F, G, H, I, J, R>
  (a: A, b: B, c: C): Curry7<D, E, F, G, H, I, J, R>
  (a: A, b: B, c: C, d: D): Curry6<E, F, G, H, I, J, R>
  (a: A, b: B, c: C, d: D, e: E): Curry5<F, G, H, I, J, R>
  (a: A, b: B, c: C, d: D, e: E, f: F): Curry4<G, H, I, J, R>
  (a: A, b: B, c: C, d: D, e: E, f: F, g: G): Curry3<H, I, J, R>
  (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H): Curry2<I, J, R>
  (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I): Curry1<J, R>
  (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I, j: J): R
}

// curry 函数的返回类型
// 
// P: curry 的目标原始函数的参数列表声明类型，首次 curry 时，通过如下方式
// `<P extends any[], R>(fn: (...args: P) => R, arity?: number): Curry<P, R>`
// 捕获，并传入内部使用
// 
// T: curry 结果函数的参数列表类型，通过 Cast<T, Partial<P>> 确保类型匹配 P
// 
// curry 结果函数的返回值部分，根据 Drop<Length<T>, P>，减去真实传入的 T 的长度，得到剩余部分，剩余部分根据长度，返回对应的新的 curry 类型
// 其中，硬编码 0 - 10 个剩余参数以获得更好的类型支持和性能，之外的则动态递归处理
export type Curried<P extends any[], R> = <T extends any[]>(...args: Cast<T, Partial<P>>) =>
  // 没有剩余参数可消耗，则返回最终结果
  Drop<Length<T>, P> extends [] ? R
  // 剩余 1
  : Drop<Length<T>, P> extends [infer A] ? Curry1<A, R>
  // 剩余 2
  : Drop<Length<T>, P> extends [infer A, infer B] ? Curry2<A, B, R>
  // 剩余 3
  : Drop<Length<T>, P> extends [infer A, infer B, infer C] ? Curry3<A, B, C, R>
  // 剩余 4
  : Drop<Length<T>, P> extends [infer A, infer B, infer C, infer D]
    ? Curry4<A, B, C, D, R>
  // 剩余5
  : Drop<Length<T>, P> extends [infer A, infer B, infer C, infer D, infer E]
    ? Curry5<A, B, C, D, E, R>
  // 剩余6
  : Drop<Length<T>, P> extends [infer A,infer B,infer C,infer D,infer E,infer F]
    ? Curry6<A, B, C, D, E, F, R>
  // 剩余7
  : Drop<Length<T>, P> extends [infer A,infer B,infer C,infer D,infer E,infer F,infer G]
    ? Curry7<A, B, C, D, E, F, G, R>
  // 剩余8
  : Drop<Length<T>, P> extends [infer A,infer B,infer C,infer D,infer E,infer F,infer G,infer H]
    ? Curry8<A, B, C, D, E, F, G, H, R>
  // 剩余9
  : Drop<Length<T>, P> extends [infer A,infer B,infer C,infer D,infer E,infer F,infer G,infer H, infer I,]
    ? Curry9<A, B, C, D, E, F, G, H, I, R>
  // 剩余10
  : Drop<Length<T>, P> extends [infer A,infer B,infer C,infer D,infer E,infer F,infer G,infer H, infer I, infer J]
    ? Curry10<A, B, C, D, E, F, G, H, I, J, R>
  // 剩余更多，走 curryN
  : Drop<Length<T>, P> extends [any, ...any[]] ? Curried<Drop<Length<T>, P> extends infer REST ? Cast<REST, any[]> : never, R> : never
