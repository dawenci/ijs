import has from './has'

export interface ICache {
  clear(): void
  delete(key: any): void
  has(key: any): boolean
  get(key: any): any
  set(key: any, value: any): void
  [key: string]: any
  [index: number]: any
}

export default function memoize<T extends any[], R>(fn: (...args: T) => R, options: any = {}) {
  // 如何解析 cache key
  const resolver = options.resolver || defaultResolver
  // cache 构造方法
  const cache = options.cache || makeDefaultCache()

  function memoized(...args: T): R {
    let computedValue

    const cacheKey = resolver(args)
    if (cache.has(cacheKey)) {
      computedValue = cache.get(cacheKey)
    } else {
      computedValue = fn.apply(void 0, args)
      cache.set(cacheKey, computedValue)
    }

    return computedValue
  }

  // 暴露 cahce
  memoized.cache = cache

  return memoized
}

// 默认的 Cache 实现
function makeDefaultCache(): ICache {
  return {
    data: Object.create(null),
    clear() {
      this.data = Object.create(null)
    },
    delete(key) {
      delete this.cache[key]
    },
    has(key) {
      return has(key, this.data)
    },
    get(key) {
      return this.data[key]
    },
    set(key, value) {
      this.data[key] = value
    }
  }
}

// 默认的 cache key 生成方法
function defaultResolver(args) {
  if (args.length === 0) {
    const arg = args[0]
    if (arg === null || typeof arg === 'number' || typeof arg === 'boolean' || typeof arg === 'string') {
      return arg
    }
  }
  return JSON.stringify(args);
}
