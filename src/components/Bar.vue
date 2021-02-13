<template>
  <div class="bar" :style="barStyle">
    <input @focus="focus = true" @blur="focus = false" v-model="input.cmd" placeholder="Command">
    <transition name="fade">
      <div v-if="input.cmd">
      </div>
    </transition>
  </div>
</template>

<script setup>
import { computed, ref, watch } from 'vue'
import List from './List.vue'
import { input } from '../state.js'

const focus = ref(false)
const barStyle = computed(() => (input.cmd || focus.value) ? '' : 'opacity: 0.7;')
</script>

<style scoped>
div.bar {
  width: 100%;
  height: 6%;
  background-color: white;
  color: black;
  overflow: hidden;
  transition: all 0.5s ease;
}
input {
  width: 100%;
  height: 100%;
  padding: 0px 20px;
  border: none;
  font-size: 1.2rem;
  line-height: 100%;
}
</style>
