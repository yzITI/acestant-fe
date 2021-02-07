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
    <hr>
    <flow :event="ef" :pps="1" style="left: 50%;"></flow>
    <div style="margin-top: 65px;"></div>
    <div v-for="(p, i) in e.pieces" :key="i">
      <input v-model="p.C" placeholder="C" class="underline">
      <input v-model="p.T" placeholder="T" class="underline">
      <input v-model="p.L" placeholder="L" class="underline">
    </div>
    <button class="label" @click="addPiece">Add Piece</button>
  </div>
</template>

<script setup>
import { reactive, computed } from 'vue'
import { data, event, input } from '../state.js'
import Flow from './Flow.vue'

const e = reactive({
  id: null,
  name: '',
  timeString: moment().format('YYYY-MM-DD HH:mm:ss'),
  pieces: [{ C: '', T: 0, L: 0 }]
})

const ef = computed(() => ({
  id: e.id || Date.now().toString(),
  name: e.name,
  time: moment(e.timeString).unix(),
  pieces: e.pieces
}))

const showAdd = computed(() => e.name && e.timeString && !event.value)
const add = () => {
  data.value[ef.value.id] = ef.value
  input.value = ''
  event.value = null
}

const addPiece = () => {
  e.pieces.push({ C: '', T: 0, L: 0 })
}
</script>

<style scoped>
div.event {
  position: relative;
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
