<template>
  <div class="main">
    <div class="float">
      <bar></bar>
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
  padding-top: 60px;
  height: calc(100vh - 60px);
}
div.float {
  position: fixed;
  top: 0;
  width: 98%;
  padding: 20px 1%;
}
div.content {
  margin: 1% 1%;
  height: 48%;
  display: flex;
}

div.timeline {
  height: 48.4%;
}

@media (min-width: 500px) {
  div.content * {
    width: 50%;
  }
}

@media (max-width: 500px) {
  div.timeline {
    height: 32%;
  }
  div.content {
    flex-direction: column;
    height: 65%;
  }
  div.content * {
    height: 50%;
  }
}
</style>
