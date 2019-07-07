export declare type Head<T extends any[]> = T extends [any, ...any[]] ? T[0] : never;
export declare type Last<T extends any[]> = {
    0: Last<Tail<T>>;
    1: Head<T>;
}[HasTail<T> extends true ? 0 : 1];
export declare type Tail<T extends any[]> = ((...t: T) => any) extends ((_: any, ...tail: infer TT) => any) ? TT : [];
export declare type HasTail<T extends any[]> = T extends ([] | [any]) ? false : true;
export declare type Cast<X, Y> = X extends Y ? X : Y;
export declare type Prepend<E, T extends any[]> = ((head: E, ...args: T) => any) extends ((...args: infer U) => any) ? U : T;
export declare type Drop<N extends number, T extends any[], I extends any[] = []> = {
    0: Drop<N, Tail<T>, Prepend<any, I>>;
    1: T;
}[Length<I> extends N ? 1 : 0];
export declare type Length<T extends any[]> = T['length'];
export declare type Pos<I extends any[]> = Length<I>;
export declare type Next<I extends any[]> = Prepend<any, I>;
export declare type Prev<I extends any[]> = Tail<I>;
export declare type Iterator<Index extends number = 0, From extends any[] = [], I extends any[] = []> = {
    0: Iterator<Index, Next<From>, Next<I>>;
    1: From;
}[Pos<I> extends Index ? 1 : 0];
export declare type Reverse<T extends any[], R extends any[] = [], I extends any[] = []> = {
    0: Reverse<T, Prepend<T[Pos<I>], R>, Next<I>>;
    1: R;
}[Pos<I> extends Length<T> ? 1 : 0];
export declare type Concat<T1 extends any[], T2 extends any[]> = Reverse<Reverse<T1> extends infer R ? Cast<R, any[]> : never, T2>;
export declare type Append<E, T extends any[]> = Concat<T, [E]>;
export declare type Params<F extends (...args: any[]) => any> = F extends ((...args: infer A) => any) ? A : never;
/**
 * 1 个参数的函数柯里化
 */
interface Curried1<A, R> {
    (): Curried1<A, R>;
    (a: A | undefined): R;
}
export declare function curry1<A, R>(fn: (a: A) => R): Curried1<A, R>;
/**
 * 2 个参数的函数柯里化
 */
interface Curried2<A, B, R> {
    (): Curried2<A, B, R>;
    (a: A | undefined): Curried1<B, R>;
    (a: A | undefined, b: B | undefined): R;
}
export declare function curry2<A, B, R>(fn: (a: A, b: B) => R): Curried2<A, B, R>;
/**
 * 3 个参数的函数柯里化
 */
interface Curried3<A, B, C, R> {
    (): Curried3<A, B, C, R>;
    (a: A | undefined): Curried2<B, C, R>;
    (a: A | undefined, b: B | undefined): Curried1<C, R>;
    (a: A | undefined, b: B | undefined, c: C | undefined): R;
}
export declare function curry3<A, B, C, R>(fn: (a: A, b: B, c: C) => R): Curried3<A, B, C, R>;
declare type CurriedN<P extends any[], R> = <T extends any[]>(...args: Cast<T, Partial<P>>) => Drop<Length<T>, P> extends [infer A] ? Curried1<Cast<A, any>, R> : Drop<Length<T>, P> extends [infer A, infer B] ? Curried2<Cast<A, any>, Cast<B, any>, R> : Drop<Length<T>, P> extends [infer A, infer B, infer C] ? Curried3<Cast<A, any>, Cast<B, any>, Cast<C, any>, R> : Drop<Length<T>, P> extends [any, ...any[]] ? CurriedN<Drop<Length<T>, P> extends infer DT ? Cast<DT, any[]> : never, R> : R;
export declare function curryN<P extends any[], R>(fn: (...args: P) => R, n: number): CurriedN<P, R>;
/**
 * 柯里化
 */
export declare function curry<P extends any[], R>(fn: (() => R)): typeof fn;
export declare function curry<P extends any[], R>(fn: ((a: P[0]) => R)): Curried1<P[0], R>;
export declare function curry<P extends any[], R>(fn: ((a: P[0], b: P[1]) => R)): Curried2<P[0], P[1], R>;
export declare function curry<P extends any[], R>(fn: ((a: P[0], b: P[1], c: P[2]) => R)): Curried3<P[0], P[1], P[2], R>;
export declare function curry<P extends any[], R>(fn: ((...args: P) => R)): CurriedN<P, R>;
export default curry;
