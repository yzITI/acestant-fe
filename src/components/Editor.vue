<template>
  <div class="editor">
    <div class="title">
      <h2>Object Editor</h2>
      <button @click="add" v-if="showAdd" class="label">Add</button>
    </div>
    <p>
      Object 
      <input v-model="o.name" placeholder="Reminder Name" class="underline">
      <br>
      Time
      <input v-model="o.timeString" placeholder="Reminder Time" class="underline">
    </p>
    <hr>
    <flow :object="ojbk" :start="start" style="width: 92%;"></flow>
    <div style="margin-top: 65px;"></div>
    <div v-for="(p, i) in o.events" :key="i">
      <input v-model="p.C" placeholder="C" class="underline">
      <input v-model="p.T" placeholder="T" class="underline">
      <input v-model="p.L" placeholder="L" class="underline">
    </div>
    <button class="label" @click="addEvent">Add Event</button>
  </div>
</template>

<script setup>
import { reactive, computed } from 'vue'
import { data, input } from '../state.js'
import Flow from './Flow.vue'

const o = reactive({
  id: null,
  name: '',
  timeString: moment().format('YYYY-MM-DD HH:mm:ss'),
  events: [{ C: '', T: 0, L: 0 }]
})

const ojbk = computed(() => ({
  id: o.id || Date.now().toString(),
  name: o.name,
  time: moment(o.timeString).unix(),
  events: o.events
}))

const start = computed(() => moment(moment(o.timeString).format('YYYY-MM-DD')).unix())

const showAdd = computed(() => o.name && o.timeString)
const add = () => {
  data.value[ojbk.value.id] = ojbk.value
  input.cmd = ''
}

const addEvent = () => {
  o.events.push({ C: '', T: 0, L: 0 })
}
</script>

<style scoped>
div.editor {
  position: relative;
  background-color: #444;
  border-radius: 10px;
  margin: 0.8% 0;
  padding: 10px 4%;
}
div.title {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
