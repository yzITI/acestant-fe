<template>
  <div class="list" :key="tick">
    <div v-for="(o, i) in data.future">
      <div>{{ o.name }} - {{ timeString(o.time) }}</div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { data, tick, input } from '../state.js'
const timeString = t => {
  const m = moment(t * 1000)
  return `${m.fromNow()} (${m.calendar()})`
}
</script>

<style scoped>
div.list {
  overflow-y: auto;
  overflow-x: hidden;
  background-color: #666;
  padding: 10px;
}
</style>
