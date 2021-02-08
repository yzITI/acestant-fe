<template>
  <div class="flow">
    <div class="name">| {{ object.name }}</div>
    <div v-for="(e, i) in object.events" :key="i"
      class="event" :style="eStyle(e)"></div>
  </div>
</template>

<script setup>
import { defineProps, computed, ref } from 'vue'
// pps: pixel per second
const props = defineProps(['object', 'pps'])

const eStyle = (e) => {
  if (!e.L) return `top: 25px; height: 20px; width: 20px; left: ${props.pps * e.T - 10}px;`
  else return `top: 30px; height: 10px; width: ${props.pps * e.L}px; left: ${props.pps * e.T}px;`
}
</script>

<style scoped>
div.flow {
  position: absolute;
  overflow: visible;
}

div.flow * {
  position: absolute;
}

div.name {
  white-space: nowrap;
  left: -2px;
  top: 0;
}

div.event {
  background-color: white;
}
</style>
