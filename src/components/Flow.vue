<template>
  <div class="flow">
    <div class="name" :style="lStyle">| {{ object.name }}</div>
    <div v-for="(e, i) in object.events" :key="i"
      class="event" :style="eStyle(e)"></div>
  </div>
</template>

<script setup>
import { defineProps, computed, ref } from 'vue'
import { s2p } from '../utils.js'
const props = defineProps(['object', 'start'])

const t2p = t => s2p(t + props.object.time - props.start)

const eStyle = (e) => {
  if (!e.L) return `top: 25px; height: 20px; width: 20px; left: calc(${t2p(e.T)}% - 10px);`
  else return `top: 30px; height: 10px; width: ${s2p(e.L)}%; left: ${t2p(e.T)}%;`
}

const lStyle = computed(() => `left: calc(${t2p(0)}% - 2px);`)
</script>

<style scoped>
div.flow {
  position: absolute;
  width: 100%;
  height: 50px;
}

div.flow * {
  position: absolute;
}

div.name {
  white-space: nowrap;
  top: 0;
}

div.event {
  background-color: white;
}
</style>
