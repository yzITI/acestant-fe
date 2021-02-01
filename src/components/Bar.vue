<template>
  <div class="bar" :style="barStyle">
    <input @focus="input.focus = true" @blur="input.focus = false" v-model="input.value" placeholder="Search Acestant">
    <transition name="fade">
      <div v-if="input.value">
        <list></list>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { computed, ref, reactive } from 'vue'
import List from './List.vue'

const input = reactive({ value: '', focus: false })
const barStyle = computed(() => (input.value || input.focus) ? '' : 'opacity: 0.4;')
</script>

<style scoped>
div.bar {
  width: 90%;
  position: fixed;
  background-color: white;
  color: black;
  top: 20px;
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
