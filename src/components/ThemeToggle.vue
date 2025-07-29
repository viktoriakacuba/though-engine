<template>
  <button
    @click="toggleTheme"
    class="z-50 px-3 py-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300"
  >
    {{ isDark ? '🌙' : '☀️' }}
  </button>
</template>

<script setup>
import { onMounted, ref } from 'vue'

const isDark = ref(false)

function applyTheme(value) {
  const html = document.documentElement
  html.classList.remove('dark')
  if (value) html.classList.add('dark')
}

function toggleTheme() {
  isDark.value = !isDark.value
  applyTheme(isDark.value)
  localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
}

onMounted(() => {
  const saved = localStorage.getItem('theme')
  isDark.value = saved === 'dark'
  applyTheme(isDark.value)
})
</script>
