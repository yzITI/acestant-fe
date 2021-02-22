import { data, input, tick } from '../state.js'

// future -> present, present -> past
function move () {
  const f = data.future, n = data.present, p = data.past
  for (const i in f) {
    if (f[i].time && f[i].time <= tick.value) {
      n[i] = f[i]
      delete f[i]
    }
  }
  for (const i in n) {
    if (n[i].time + n[i].length <= tick.value) {
      p[i] = n[i]
      delete n[i]
    }
  }
}

// main loop
setInterval(() => {
  tick.value = moment().unix()
  move()
  // program
}, 1000)
