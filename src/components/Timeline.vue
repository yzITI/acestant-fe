<template>
  <div class="timeline" :key="r">
    <div class="t-0" :style="{ left: scale.T0pos + 'px' }"></div>
    <flow v-for="(o, i) in data" :key="i" :object="o" :pps="scale.pps" :style="oStyle(o)"></flow>
  </div>
</template>

<script setup>
import { defineProps, computed, ref } from 'vue'
import Flow from './Flow.vue'
const props = defineProps(['data', 'r'])

const scale = (() => {
  const width = window.innerWidth
  const start = -3600 // T-1h
  const end = 21600 // T+6h
  const pps = width / (end - start)
  const T0pos = pps * start * (-1)
  return { start, pps, T0pos }
})()

const oStyle = (o) => {
  const rTime = o.time - moment().unix() - scale.start
  return `left: ${rTime * scale.pps}px;`
}

</script>

<style scoped>
div.timeline {
  position: relative;
  background-color: #111;
  width: 100%;
  overflow-x: hidden;
}

div.t-0 {
  background-color: white;
  width: 1px;
  height: 100%;
  position: absolute;
  top: 0;
}
</style>
