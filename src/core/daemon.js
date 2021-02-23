import { data, input, tick } from '../state.js'

// future -> now, now -> past
function move () {
  data.future.sort((a, b) => (a.time - b.time))
  while (data.future[0]?.time <= tick.value) data.now.push(data.future.shift())
  data.now.sort((a, b) => (a.time + a.length - b.time - b.length))
  while (data.now[0]?.time + data.now[0]?.length < tick.value) data.past.push(data.now.shift())
}

// main loop
setInterval(() => {
  tick.value = moment().unix()
  move()
  // program
}, 1000)
