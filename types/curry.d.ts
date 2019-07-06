interface Curried1<A, R> {
    (): Curried1<A, R>;
    (a: A | undefined): R;
}
interface Curried2<A, B, R> {
    (): Curried2<A, B, R>;
    (b: B | undefined): Curried1<B, R>;
    (a: A | undefined, b: B | undefined): R;
}
interface Curried3<A, B, C, R> {
    (): Curried3<A, B, C, R>;
    (c: C | undefined): Curried1<C, R>;
    (b: B | undefined, c: C | undefined): Curried2<B, C, R>;
    (a: A | undefined, b: B | undefined, c: C | undefined): R;
}
export declare function curry1<A, R>(fn: (a: A) => R): Curried1<A, R>;
export declare function curry2<A, B, R>(fn: (a: A, b: B) => R): Curried2<A, B, R>;
export declare function curry3<A, B, C, R>(fn: (a: A, b: B, c: C) => R): Curried3<A, B, C, R>;
export declare function curryN(n: number, fn: Function): () => any;
/**
 * @API
 * 柯里化
 */
export declare function curry(fn: any, length: any): any;
export default curry;
