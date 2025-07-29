<template>
  <TransitionGroup name="fade" tag="div" class="space-y-3">
    <div v-if="steps.length" class="flex items-center justify-between mb-4">
      <h2 class="text-lg font-semibold">Reasoning Steps</h2>
      <button
        @click="exportSteps"
        class="text-sm px-3 py-1 bg-gray-700 text-white rounded hover:bg-gray-600 transition"
      >
        ⬇ Export JSON
      </button>
    </div>
    <div
      v-for="(step, index) in steps"
      :key="index"
      class="bg-gray-100 dark:bg-gray-800 p-4 rounded-xl border border-gray-300 dark:border-gray-700 transition-all duration-300"
    >
      <p class="font-medium">{{ step }}</p>
    </div>
  </TransitionGroup>
</template>

<script setup>
const props = defineProps({
  steps: Array
})

function exportSteps() {
  const blob = new Blob([JSON.stringify(props.steps, null, 2)], {
    type: 'application/json',
  })

  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = `kairos-thoughts-${Date.now()}.json`
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  URL.revokeObjectURL(url)
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.4s ease;
}
.fade-enter-from {
  opacity: 0;
  transform: translateY(10px);
}
.fade-enter-to {
  opacity: 1;
  transform: translateY(0);
}
</style>
