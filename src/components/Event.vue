<template>
  <div class="event">
    <div class="title">
      <h2>Event</h2>
      <button @click="add" v-if="showAdd" class="label">Add</button>
    </div>
    <p>
      Event 
      <input v-model="e.name" placeholder="Reminder Name" class="underline">
      <br>
      Time
      <input v-model="e.timeString" placeholder="Reminder Time" class="underline">
    </p>
  </div>
</template>

<script setup>
import { reactive, computed } from 'vue'
import { data, event, input } from '../state.js'

const e = reactive({
  id: Math.random().toString().substr(2),
  name: '',
  timeString: moment().format('YYYY-MM-DD HH:mm:ss'),
  time: computed(() => moment(e.timeString).unix())
})

const showAdd = computed(() => e.name && e.timeString && !event.value)
const add = () => {
  data.value[e.id] = {
    name: e.name,
    time: e.time,
    pieces: [{ T: 0, L: 0 }]
  }
  input.value = ''
  event.value = null
}
</script>

<style scoped>
div.event {
  background-color: #444;
  border-radius: 10px;
  margin: 20px 0;
  padding: 10px 4%;
}
div.title {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
