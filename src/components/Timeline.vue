<template>
  <div class="timeline">
    <div class="t-0"></div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { data, tick } from '../state.js'
import { s2p } from '../utils.js'
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
  width: 20%;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0.2;
}
</style>
