import { curry1, curry2, curry3, curry4, curry5, curryN, curry } from './curry'
import flip from './flip'

const curry1Test1 = curry1((a: number) => a)
const curry1Test2 = curry1Test1(3)

const curry2Test1 = curry2((a: number, b: string) => a + b)
const curry2Test2 = curry2Test1(3)
const curry2Test3 = curry2Test2('4')

const _curry2Test1 = curry((a: number, b: string) => a + b)
const _curry2Test2 = _curry2Test1(3)
const _curry2Test3 = _curry2Test2('4')

const curry3Test1 = curry3((a: number, b: string, c: string) => a + b + c)
const curry3Test2 = curry3Test1(3)
const curry3Test3 = curry3Test2('4')
const curry3Test4 = curry3Test3('5')

const curry4Test1 = curry4((a: number, b: string, c: string, d: string) => a + b + c + d)
const curry4Test2 = curry4Test1(3)
const curry4Test3 = curry4Test2('4')
const curry4Test4 = curry4Test3('5')
const curry4Test5 = curry4Test4('6')

const curry5Test1 = curry5((a: number, b: string, c: string, d: string, e: string) => a)
const curry5Test2 = curry5Test1(3)
const curry5Test3 = curry5Test2('4')
const curry5Test4 = curry5Test3('5')
const curry5Test5 = curry5Test4('6')
const curry5Test6 = curry5Test5('6')

const curry6Test1 = curry((a: number, b: string, c: string, d: string, e: string, f: string) => a)
const curry6Test2 = curry6Test1(3)
const curry6Test3 = curry6Test2('4')
const curry6Test4 = curry6Test3('5')
const curry6Test5 = curry6Test4('6')
const curry6Test6 = curry6Test5('6')
const curry6Test7 = curry6Test6('6')

const curry7Test1 = curry((a: number, b: string, c: string, d: string, e: string, f: string, g: string) => a)
const curry7Test2 = curry7Test1(3)
const curry7Test3 = curry7Test2('4')
const curry7Test4 = curry7Test3('5')
const curry7Test5 = curry7Test4('6')
const curry7Test6 = curry7Test5('6')
const curry7Test7 = curry7Test6('6')
const curry7Test8 = curry7Test7('6')

const curry8Test1 = curry((a: number, b: string, c: string, d: string, e: string, f: string, g: string, h: string) => a)
const curry8Test2 = curry8Test1(3)
const curry8Test3 = curry8Test2('4')
const curry8Test4 = curry8Test3('5')
const curry8Test5 = curry8Test4('6')
const curry8Test6 = curry8Test5('6')
const curry8Test7 = curry8Test6('6')
const curry8Test8 = curry8Test7('6')
const curry8Test9 = curry8Test8('6')

const curry9Test1 = curry((a: number, b: string, c: string, d: string, e: string, f: string, g: string, h: string, i: string) => a)
const curry9Test2 = curry9Test1(3)
const curry9Test3 = curry9Test2('4')
const curry9Test4 = curry9Test3('5')
const curry9Test5 = curry9Test4('6')
const curry9Test6 = curry9Test5('6')
const curry9Test7 = curry9Test6('6')
const curry9Test8 = curry9Test7('6')
const curry9Test9 = curry9Test8('6')
const curry9Test10 = curry9Test9('6')

const curry10Test1 = curry((a: number, b: string, c: string, d: string, e: string, f: string, g: string, h: string, i: string, j: string) => a)
const curry10Test2 = curry10Test1(3)
const curry10Test3 = curry10Test2('4')
const curry10Test4 = curry10Test3('5')
const curry10Test5 = curry10Test4('6')
const curry10Test6 = curry10Test5('6')
const curry10Test7 = curry10Test6('6')
const curry10Test8 = curry10Test7('6')
const curry10Test9 = curry10Test8('6')
const curry10Test10 = curry10Test9('6')
const curry10Test11 = curry10Test10('6')

const curry11Test1 = curry((a: number, b: string, c: string, d: string, e: string, f: string, g: string, h: string, i: string, j: string, k: string) => a)
const curry11Test2 = curry11Test1(3)
const curry11Test3 = curry11Test2('4')
const curry11Test4 = curry11Test3('5')
const curry11Test5 = curry11Test4('6')
const curry11Test6 = curry11Test5('6')
const curry11Test7 = curry11Test6('6')
const curry11Test8 = curry11Test7('6')
const curry11Test9 = curry11Test8('6')
const curry11Test10 = curry11Test9('6')
const curry11Test11 = curry11Test10('6')
const curry11Test12 = curry11Test11('6')

const curry12Test1 = curry((a: number, b: string, c: string, d: string, e: string, f: string, g: string, h: string, i: string, j: string, k: string,l:string) => a)
const curry12Test2 = curry12Test1(3)
const curry12Test3 = curry12Test2('4')
const curry12Test4 = curry12Test3('5')
const curry12Test5 = curry12Test4('6')
const curry12Test6 = curry12Test5('6')
const curry12Test7 = curry12Test6('6')
const curry12Test8 = curry12Test7('6')
const curry12Test9 = curry12Test8('6')
const curry12Test10 = curry12Test9('6')
const curry12Test11 = curry12Test10('6')
const curry12Test12 = curry12Test11('6')
const curry12Test13 = curry12Test11('6')

const curryNTest1 = curryN((a: number) => a)
const curryNTest2 = curryNTest1(1)

const curryNTest3 = curryN((a: number, b: number) => a + b)
const curryNTest4 = curryNTest3(1)(2)

const curryNTest5 = curryN((a: number, b: number, c: number) => a + b + c)
const curryNTest6 = curryNTest5(1)(2)(3)

const curryNTest7 = curryN((a: number, b: number, c: number, d: number) => a + b + c + d)
const curryNTest8 = curryNTest7(1)(2)(3)(4)

const curryNTest9 = curryN((a: number, b: number) => a + b)
const curryNTest10 = curryNTest9(1)(2)

const curryNTest11 = curryN((a: number, b: number, c: number, d: number, e: number) => a + b + c + d + e)
const curryNTest12 = curryNTest11(1)(2)(3,4)(5)


const curryTest1 = curry((a: number, b: number, c: number, d: number, e: number) => a + b + c + d + e)
const curryTest2 = curryTest1(1)(2)(3,4)(5)


const curryTest3 = curry((a: number, b: number, c: number, d: number, e: number, f: number, g: number) => a + b + c + d + e + f + g)
curryTest3(1)(2)(3,4,5)(2, 7)




// type test
const t000 = flip()
const t111 = flip(() => 3)
const t1111 = t111()
const t222 = flip((a: number) => a)
const t2222 = t222(1)
const fn = (a: number, b: string) => a + b
const fnc = curry(fn)
fnc(1)('2')
const fnf = flip(fn)
fnf('1')(2)
const fnff = flip(flip(fn))
fnff(1)('2')
const fnfff = flip(flip(flip(fn)))
fnfff('1')(2)

const f = (a:number,b:string,c:number,d:string,e:number) => a+b+c+d+e
curry(f)(1,'2',3,'4',5)
flip(f)('1',2,3,'4',5)
const ff5 = flip(flip(f))
ff5(1, '2', 3, '4', 5)

const f10 = (a:number,b:string,c:number,d:string,e:number,f:number,g:number,h:number,i:number,j:number) => a+b+c+d+e
const ff10 = flip(f10)
ff10('23',1,2,'3',4,5,6,7,8,9)

flip((a:number,b:string,c:string,d:string,e,f,g,h,i,j,k) => a)('1',2,3,4,5,6,7,8,9,10,11)
flip(flip((a:number,b:string,c:string,d:string,e,f,g,h,i,j,k) => a)('1',2,3,4,5,6,7,8,9,10,11))

// const fnWithArity = curry((a: number, b = 2, ...c) => a + b + Math.max.apply(Math, c), 2)
