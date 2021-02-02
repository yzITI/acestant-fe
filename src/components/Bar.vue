<template>
  <div class="bar" :style="barStyle">
    <input @focus="focus = true" @blur="focus = false" v-model="input" placeholder="Search Acestant">
    <transition name="fade">
      <div v-if="input">
        <list></list>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import List from './List.vue'
import { input } from '../daemon/state.js'
const focus = ref(false)

const barStyle = computed(() => (input.value || focus.value) ? '' : 'opacity: 0.4;')
</script>

<style scoped>
div.bar {
  width: 100%;
  background-color: white;
  color: black;
  border-radius: 10px;
  overflow: hidden;
  transition: all 0.5s ease;
}
input {
  width: 100%;
  padding: 10px 20px;
  border: none;
  font-size: 1.2rem;
}
</style>
