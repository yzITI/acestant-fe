<template>
  <div class="flow">
    <div class="name">| {{ object.name }}</div>
    <div v-for="(p, i) in object.events" :key="i"
      class="events" :style="pStyle(p)"></div>
  </div>
</template>

<script setup>
import { defineProps, computed, ref } from 'vue'
// pps: pixel per second
const props = defineProps(['object', 'pps'])

const pStyle = (p) => {
  if (!p.L) return `top: 25px; height: 20px; width: 20px; left: ${props.pps * p.T - 10}px;`
  else return `top: 30px; height: 10px; width: ${props.pps * p.L}px; left: ${props.pps * p.T}px;`
}
</script>

<style scoped>
div.flow {
  position: absolute;
}

div.flow * {
  position: absolute;
}

div.name {
  white-space: nowrap;
  left: -2px;
  top: 0;
}

div.pieces {
  background-color: white;
}
</style>
