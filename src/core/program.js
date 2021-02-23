import { data, tick, input } from '../state.js'

function score () {
  data.future.sort((a, b) => (a.time - b.time || a.length - b.length))
  const map = {} // id: object
  for (const o of data.now) map[o.id] = o
  for (const o of data.future) map[o.id] = o
  const points = {} // time: [object]
  const curr = data.now.map(x => x.id) // [id]

  const end = (id) => map[id].time + map[id].length
  function finish (T) {
    curr.sort((a, b) => end(a) - end(b))
    while (curr.length && end(curr[0]) < T) {
      const id = curr.shift()
      points[end(id)] = [...curr]
    }
  }

  for (const o of data.future) {
    finish(o.time)
    curr.push(o.id)
    points[o.time] = [...new Set(
      points[o.time] ? [...points[o.time], ...curr] : [...curr]
    )]
  }
  finish(99999999999)

  if (input.cmd === 'debug') console.log(points)
}

export function program () {
  score()
}
