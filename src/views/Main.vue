<template>
  <div class="main">
    <div class="float">
      <bar></bar>
      <Object v-if="object || input.toLowerCase() === 'object'"></Object>
    </div>
    <h1>Acestant</h1>
    <list :data="data"></list>
  </div>
</template>

<script setup>
import { input, object, data } from '../state.js'
import List from '../components/List.vue'
import Bar from '../components/Bar.vue'
import Object from '../components/Object.vue'
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
