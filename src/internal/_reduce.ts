export default function reduce(
  reducer: (accumulator: any, current: any) => any,
  init: any,
  list: any
) {
  let accumulator = init
  const len = list.length
  for (let index = 0; index < len; index += 1) {
    accumulator = reducer(accumulator, list[index])
  }
  return accumulator
}
