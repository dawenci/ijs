export default function keys(obj: any) {
  if (obj === null || obj == undefined) return []
  return Object.keys(obj)
}
