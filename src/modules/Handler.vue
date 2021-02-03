<template>
  <div class="all-handler">
    <reminder v-if="key === 'reminder'"></reminder>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { input } from '../state.js'
import Reminder from './Reminder/Handler.vue'

const key = computed(() => input.value.toLowerCase())
</script>

<style scoped>
div.all-handler {
  position: relative;
  background-color: #444;
  border-radius: 10px;
}
</style>

<style>
div.handler {
  padding: 10px 4%;
  margin: 20px 0;
}
</style>
