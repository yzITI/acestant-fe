<template>
  <div class="info">
    <h1>Acestant</h1>
    <p :key="tick">{{ date() }}</p>
  </div>
</template>

<script setup>
import { tick } from '../state.js'
const date = () => moment().format('YYYY-MM-DD dddd HH:mm:ss')
</script>

<style scoped>
div.info {
  text-align: center;
  overflow: hidden;
}

@media (max-width: 500px) {
  div.info {
    overflow-y: scroll;
  }
}
</style>
