<template>
  <div class="main">
    <div class="float">
      <bar></bar>
      <editor v-if="object || input.toLowerCase() === 'object'"></editor>
    </div>
    <div class="content">
      <info></info>
      <list :data="data" :r="r"></list>
    </div>
    <timeline class="timeline" :data="data" :r="r"></timeline>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { input, object, data } from '../state.js'
import Bar from '../components/Bar.vue'
import Editor from '../components/Editor.vue'
import Info from '../components/Info.vue'
import List from '../components/List.vue'
import Timeline from '../components/Timeline.vue'

const r = ref(1) // global refresh
setInterval(() => { r.value++ }, 1000)

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
  height: 49%;
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
