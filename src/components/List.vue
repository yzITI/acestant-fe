<template>
  <div class="list">
    <div v-for="(o, i) in data" :key="i + r">
      <div>{{ o.name }} - {{ timeString(o.time) }}</div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, computed, ref } from 'vue'
defineProps(['data', 'r'])
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
  border-radius: 10px;
  padding: 10px;
}
</style>
