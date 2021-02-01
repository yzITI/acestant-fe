<template>
  <router-view></router-view>
</template>

<script setup>
</script>

<style>
* { outline: none; user-select: none; }
.swal2-modal { background: #444; }
.swal2-title { color: white; }
.swal2-content { color: white; }
html {
  overflow: auto;
}
body {
  margin: 0;
  background-color: #232425;
  color: white;
  min-height: 100vh;
}
#app {
  font-family: sans-serif;
}
</style>