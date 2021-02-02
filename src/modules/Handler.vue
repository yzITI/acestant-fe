<template>
  <div class="handler">
    <reminder v-if="key === 'reminder'"></reminder>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { input } from '../daemon/state.js'
import Reminder from './Reminder/Handler.vue'

const key = computed(() => input.value.toLowerCase())
</script>

<style scoped>
div.handler {
  position: relative;
  background-color: #444;
  border-radius: 10px;
}
</style>
