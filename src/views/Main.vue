<template>
  <div class="main">
    <bar></bar>
    <handler></handler>
    <h1>List</h1>
    <list :data="daemon.state.list"></list>
  </div>
</template>

<script setup>
import daemon from '../daemon'
import List from '../components/List.vue'
import Bar from '../components/Bar.vue'
import Handler from '../modules/Handler.vue'
</script>

<style scoped>
div.main {
  padding: 60px 5% 20px;
}
</style>
