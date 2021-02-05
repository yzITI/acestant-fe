<template>
  <div v-for="(e, i) in data" :key="i + r">
    <h3>{{ e.name }}</h3>
    <p>{{ timeString(e.time) }}</p>
  </div>
</template>

<script setup>
import { defineProps, computed, ref } from 'vue'
defineProps(['data'])
const r = ref(1)
setInterval(() => { r.value++ }, 10000)

const timeString = t => {
  const m = moment(t * 1000)
  return `${m.fromNow()} (${m.calendar()})`
}
</script>
