<template>
  <reminder v-if="popup === 'reminder'"></reminder>
</template>

<script setup>
import { ref } from 'vue'
import Reminder from './Reminder/Handler.vue'
const popup = ref('')

window.show = com => {
  popup.value = com
}
</script>
