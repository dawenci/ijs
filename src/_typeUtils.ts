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

export type Concat<T1 extends any[], T2 extends any[]> =
  Reverse<Reverse<T1> extends infer R ? Cast<R, any[]> : never, T2>

export type Append<E, T extends any[]> =
  Concat<T, [E]>

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


export type Flip<T extends any[]> = 
  T extends [infer A, infer B] ? [B, A] :
  T extends [any, any, ...any[]] ? [T[1], T[0], ...Drop<2, T>]
  : T

export type Params<F extends (...args: any[]) => any> = 
  F extends ((...args: infer A) => any) ? A : never
