export default function reduce(fn: (acc: any, item: any) => any, acc: any, list: any) {
  const len = list.length
  for (let index = 0; index < len; index += 1) {
    acc = fn(acc, list[index])
  }
  return acc
}
