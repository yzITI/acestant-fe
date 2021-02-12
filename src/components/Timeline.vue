<template>
  <div class="timeline">
    <div class="t-0" :style="t0Style"></div>
    <flow v-for="(o, i) in data" :key="i" :object="o" :start="start"></flow>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { data, tick } from '../state.js'
import { s2p } from '../utils.js'
import Flow from './Flow.vue'

const start = moment(moment().format('YYYY-MM-DD')).unix()

const t0Style = computed(() => `width: ${s2p(tick.value - start)}%;`)

const oStyle = (o) => {
  return ``
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
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0.2;
}
</style>
