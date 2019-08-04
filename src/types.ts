import { Cast, Drop, Length } from './_typeUtils'

export type Arity1<A, R> = (a: A, ...rest: any[]) => R
export type Arity2<A, B, R> = (a: A, b: B, ...rest: any[]) => R
export type Arity3<A, B, C, R> = (a: A, b: B, c: C, ...rest: any[]) => R
export type Arity4<A, B, C, D, R> = (a: A, b: B, c: C, d: D, ...rest: any[]) => R
export type Arity5<A, B, C, D, E, R> = (a: A, b: B, c: C, d: D, e: E, ...rest: any[]) => R
export type Arity6<A, B, C, D, E, F, R> = (a: A, b: B, c: C, d: D, e: E, f: F, ...rest: any[]) => R
export type Arity7<A, B, C, D, E, F, G, R> = (a: A, b: B, c: C, d: D, e: E, f: F, g: G, ...rest: any[]) => R
export type Arity8<A, B, C, D, E, F, G, H, R> = (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, ...rest: any[]) => R
export type Arity9<A, B, C, D, E, F, G, H, I, R> = (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I, ...rest: any[]) => R
export type Arity10<A, B, C, D, E, F, G, H, I, J, R> = (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I, j: J, ...rest: any[]) => R
export type ArityN<P extends any[], R> = (...args:P)=>R

export interface Curry1<A, R> {
  (): Curry1<A, R>
  (a: A, ...rest: any[]): R
}

export interface Curry2<A, B, R> {
  (): Curry2<A, B, R>
  (a: A, ...rest: any[]): Curry1<B, R>
  (a: A, b: B, ...rest: any[]): R
}

export interface Curry3<A, B, C, R> {
  (): Curry3<A, B, C, R>
  (a: A, ...rest: any[]): Curry2<B, C, R>
  (a: A, b: B, ...rest: any[]): Curry1<C, R>
  (a: A, b: B, c: C, ...rest: any[]): R
}

export interface Curry4<A, B, C, D, R> {
  (): Curry4<A, B, C, D, R>
  (a: A, ...rest: any[]): Curry3<B, C, D, R>
  (a: A, b: B, ...rest: any[]): Curry2<C, D, R>
  (a: A, b: B, c: C, ...rest: any[]): Curry1<D, R>
  (a: A, b: B, c: C, d: D, ...rest: any[]): R
}

export interface Curry5<A, B, C, D, E, R> {
  (): Curry5<A, B, C, D, E, R>
  (a: A): Curry4<B, C, D, E, R>
  (a: A, b: B, ...rest: any[]): Curry3<C, D, E, R>
  (a: A, b: B, c: C, ...rest: any[]): Curry2<D, E, R>
  (a: A, b: B, c: C, d: D, ...rest: any[]): Curry1<E, R>
  (a: A, b: B, c: C, d: D, e: E, ...rest: any[]): R
}

export interface Curry6<A, B, C, D, E, F, R> {
  (): Curry6<A, B, C, D, E, F, R>
  (a: A, ...rest: any[]): Curry5<B, C, D, E, F, R>
  (a: A, b: B, ...rest: any[]): Curry4<C, D, E, F, R>
  (a: A, b: B, c: C, ...rest: any[]): Curry3<D, E, F, R>
  (a: A, b: B, c: C, d: D, ...rest: any[]): Curry2<E, F, R>
  (a: A, b: B, c: C, d: D, e: E, ...rest: any[]): Curry1<F, R>
  (a: A, b: B, c: C, d: D, e: E, f: F, ...rest: any[]): R
}

export interface Curry7<A, B, C, D, E, F, G, R> {
  (): Curry7<A, B, C, D, E, F, G, R>
  (a: A, ...rest: any[]): Curry6<B, C, D, E, F, G, R>
  (a: A, b: B, ...rest: any[]): Curry5<C, D, E, F, G, R>
  (a: A, b: B, c: C, ...rest: any[]): Curry4<D, E, F, G, R>
  (a: A, b: B, c: C, d: D, ...rest: any[]): Curry3<E, F, G, R>
  (a: A, b: B, c: C, d: D, e: E, ...rest: any[]): Curry2<F, G, R>
  (a: A, b: B, c: C, d: D, e: E, f: F, ...rest: any[]): Curry1<G, R>
  (a: A, b: B, c: C, d: D, e: E, f: F, g: G, ...rest: any[]): R
}

export interface Curry8<A, B, C, D, E, F, G, H, R> {
  (): Curry8<A, B, C, D, E, F, G, H, R>
  (a: A, ...rest: any[]): Curry7<B, C, D, E, F, G, H, R>
  (a: A, b: B, ...rest: any[]): Curry6<C, D, E, F, G, H, R>
  (a: A, b: B, c: C, ...rest: any[]): Curry5<D, E, F, G, H, R>
  (a: A, b: B, c: C, d: D, ...rest: any[]): Curry4<E, F, G, H, R>
  (a: A, b: B, c: C, d: D, e: E, ...rest: any[]): Curry3<F, G, H, R>
  (a: A, b: B, c: C, d: D, e: E, f: F, ...rest: any[]): Curry2<G, H, R>
  (a: A, b: B, c: C, d: D, e: E, f: F, g: G, ...rest: any[]): Curry1<H, R>
  (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, ...rest: any[]): R
}

export interface Curry9<A, B, C, D, E, F, G, H, I, R> {
  (): Curry9<A, B, C, D, E, F, G, H, I, R>
  (a: A, ...rest: any[]): Curry8<B, C, D, E, F, G, H, I, R>
  (a: A, b: B, ...rest: any[]): Curry7<C, D, E, F, G, H, I, R>
  (a: A, b: B, c: C, ...rest: any[]): Curry6<D, E, F, G, H, I, R>
  (a: A, b: B, c: C, d: D, ...rest: any[]): Curry5<E, F, G, H, I, R>
  (a: A, b: B, c: C, d: D, e: E, ...rest: any[]): Curry4<F, G, H, I, R>
  (a: A, b: B, c: C, d: D, e: E, f: F, ...rest: any[]): Curry3<G, H, I, R>
  (a: A, b: B, c: C, d: D, e: E, f: F, g: G, ...rest: any[]): Curry2<H, I, R>
  (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, ...rest: any[]): Curry1<I, R>
  (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I, ...rest: any[]): R
}

export interface Curry10<A, B, C, D, E, F, G, H, I, J, R> {
  (): Curry10<A, B, C, D, E, F, G, H, I, J, R>
  (a: A, ...rest: any[]): Curry9<B, C, D, E, F, G, H, I, J, R>
  (a: A, b: B, ...rest: any[]): Curry8<C, D, E, F, G, H, I, J, R>
  (a: A, b: B, c: C, ...rest: any[]): Curry7<D, E, F, G, H, I, J, R>
  (a: A, b: B, c: C, d: D, ...rest: any[]): Curry6<E, F, G, H, I, J, R>
  (a: A, b: B, c: C, d: D, e: E, ...rest: any[]): Curry5<F, G, H, I, J, R>
  (a: A, b: B, c: C, d: D, e: E, f: F, ...rest: any[]): Curry4<G, H, I, J, R>
  (a: A, b: B, c: C, d: D, e: E, f: F, g: G, ...rest: any[]): Curry3<H, I, J, R>
  (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, ...rest: any[]): Curry2<I, J, R>
  (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I, ...rest: any[]): Curry1<J, R>
  (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I, j: J, ...rest: any[]): R
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
export type Currying<P extends any[], R> = <T extends any[]>(...args: Cast<T, Partial<P>>) =>
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
  : Drop<Length<T>, P> extends [any, ...any[]] ? Currying<Drop<Length<T>, P> extends infer REST ? Cast<REST, any[]> : never, R> : never
