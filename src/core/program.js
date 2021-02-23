import { data, tick } from '../state.js'

function score (id) {
  const object = data.future[id]
  const start = object.time, end = object.time + object.length
  let res = 0
  for (const i in data.present) {
    const o = data.present[i]
    res -= Math.max(o.time + o.length - start, 0)
  }
  for (const i in data.future) {
    if (i == id) continue
    const o = data.future[i]
    if (!o.time || o.time + o.length <= start || o.time >= end) continue
    res -= Math.min(o.length, object.length, o.time + o.length - start, end - o.time)
  }
  return res
}

export function program () {
  for (const i in data.future) {
    let start
    // here
  }
}
