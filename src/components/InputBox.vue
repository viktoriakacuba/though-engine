<template>
  <form @submit.prevent="submit">
    <input
      v-model="input"
      type="text"
      placeholder="Enter your idea or question..."
      class="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-black dark:text-white
         outline-none focus:outline focus:outline-2 focus:outline-blue-500 dark:focus:outline-blue-400
         transition-all duration-400"
    />
    <button
      :disabled="loading"
      class="bg-blue-600 my-2.5 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold py-2 px-6 rounded transition"
    >
      {{ loading ? 'Thinking...' : 'Think' }}
    </button>
  </form>
</template>

<script setup>
import { ref } from 'vue'
const input = ref('')
const emit = defineEmits(['submit'])
const props = defineProps(['loading'])

function submit() {
  if (input.value.trim()) {
    emit('submit', input.value.trim())
    input.value = ''
  }
}
</script>
