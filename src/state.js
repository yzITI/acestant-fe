import { ref, reactive } from 'vue'

// for global refresh
export const tick = ref(moment().unix())

export const input = reactive({
  cmd: '',
  on: ''
})

export const data = reactive({
  past: [],
  now: [],
  future: []
})
