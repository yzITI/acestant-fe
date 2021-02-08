<template>
  <div v-for="(o, i) in data" :key="i + r">
    <h3>{{ o.name }}</h3>
    <p>{{ timeString(o.time) }}</p>
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
