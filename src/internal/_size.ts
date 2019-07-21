export default function size(coll: string | ArrayLike<any>) {
  if (!coll || !coll.length) return 0
  return coll.length >>> 0
}
