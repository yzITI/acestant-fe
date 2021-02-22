<template>
  <div class="main">
    <bar></bar>
    <div class="float">
      <editor v-if="input.cmd.toLowerCase() === 'object'"></editor>
    </div>
    <div class="content">
      <info></info>
      <list></list>
    </div>
    <timeline class="timeline"></timeline>
  </div>
</template>

<script setup>
import { input } from '../state.js'
import Bar from '../components/Bar.vue'
import Editor from '../components/Editor.vue'
import Info from '../components/Info.vue'
import List from '../components/List.vue'
import Timeline from '../components/Timeline.vue'
</script>

<style scoped>
div.main {
  height: 100vh;
}
div.float {
  position: fixed;
  top: 6%;
  width: 98%;
  padding: 1% 1%;
}
div.content {
  height: 64%;
  display: flex;
}

div.timeline {
  height: 30%;
}

@media (min-width: 500px) {
  div.content * {
    width: 50%;
  }
}

@media (max-width: 500px) {
  div.timeline {
    height: 20%;
  }
  div.content {
    flex-direction: column;
    height: 74%;
  }
  div.content * {
    height: 50%;
  }
}
</style>
