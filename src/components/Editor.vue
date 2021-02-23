<template>
  <div class="editor">
    <div class="title">
      <h2>Editor</h2>
      <button @click="add" v-if="showAdd" class="label">Add</button>
    </div>
    <p>
      Name 
      <input v-model="o.name" placeholder="Name" class="underline">
      <br>
      Length 
      <input v-model="o.length" placeholder="Length" class="underline">
      <br>
      <input type="checkbox" v-model="o.fix">
      Fix Time
      <input v-if="o.fix" v-model="o.time" placeholder="Time" class="underline">
    </p>
  </div>
</template>

<script setup>
import { reactive, computed } from 'vue'
import { data, input } from '../state.js'

const o = reactive({
  id: moment().unix(),
  name: '', // object name
  label: '', // label
  detail: '', // description
  length: 0, // time length
  fix: false, // isFixed
  time: '' // timestamp
})

// draft
const showAdd = computed(() => o.name)
const add = () => {
  o.time = o.fix ? moment(o.time).unix() : undefined
  o.length = Number(o.length)
  data.future.push(o)
  input.cmd = ''
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
