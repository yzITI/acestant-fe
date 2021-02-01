<template>
  <div v-for="(item, i) in data" :key="i">
    {{ item }}
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
defineProps(['data'])
</script>
