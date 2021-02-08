<template>
  <div class="main">
    <div class="float">
      <bar></bar>
      <editor v-if="object || input.toLowerCase() === 'object'"></editor>
    </div>
    <h1>Acestant</h1>
    <list :data="data" :r="r"></list>
    <timeline :data="data" :r="r"></timeline>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { input, object, data } from '../state.js'
import List from '../components/List.vue'
import Bar from '../components/Bar.vue'
import Editor from '../components/Editor.vue'
import Timeline from '../components/Timeline.vue'

const r = ref(1) // global refresh
setInterval(() => { r.value++ }, 1000)

</script>

<style scoped>
div.main {
  padding: 60px 5% 20px;
}
div.float {
  position: fixed;
  top: 0;
  width: 90%;
  padding: 20px 0;
}
</style>
