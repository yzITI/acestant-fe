import { ref, reactive } from 'vue'

// for global refresh
export const tick = ref(moment().unix())
setInterval(() => { tick.value = moment().unix() }, 1000)

export const input = reactive({
  cmd: '',
  on: ''
})

export const data = ref({})
