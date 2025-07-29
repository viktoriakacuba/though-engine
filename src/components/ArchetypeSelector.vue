<template>
    <select
      v-model="selected"
      @change="emit('select', selected)"
      class="z-50 bg-gray-100 dark:bg-gray-800 border dark:border-gray-700 text-sm rounded px-3 py-2 text-black dark:text-white"
    >
      <option value="strategist">🧠 Strategist</option>
      <option value="philosopher">🧙 Philosopher</option>
      <option value="hacker">🕵️ Hacker</option>
    </select>
</template>
  
<script setup>
  import { ref } from 'vue'
  const selected = ref('strategist')
  const emit = defineEmits(['select'])
</script>
  