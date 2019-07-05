export declare function curry1(fn: (a: any) => any): (a?: any) => any;
export declare function curry2(fn: (a: any, b: any) => any): (a?: any, b?: any) => any;
export declare function curry3(fn: (a: any, b: any, c: any) => any): (a?: any, b?: any, c?: any) => any;
export declare function curryN(n: number, fn: Function): () => any;
/**
 * @API
 * 柯里化
 */
export declare function curry(fn: any, length: any): any;
export default curry;
