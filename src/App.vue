<template>
  <div class="min-h-screen px-6 py-6 transition-colors duration-500 bg-white text-black dark:bg-gray-900 dark:text-white">
    <div class="flex justify-between items-center mb-4">
      <ArchetypeSelector @select="handleArchetypeChange" />
      <ThemeToggle />
    </div>
    <div class="mx-auto">
      <InputBox @submit="handleSubmit" :loading="isLoading" />
      <StepVisualizer :steps="steps" />
      <PreviousThoughts
        :history="rawHistory"
        @load="handleLoad"
        @remove="handleRemove"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { nextTick } from 'vue'
import InputBox from './components/InputBox.vue'
import StepVisualizer from './components/StepVisualizer.vue'
import ThemeToggle from './components/ThemeToggle.vue'
import ArchetypeSelector from './components/ArchetypeSelector.vue'
import PreviousThoughts from './components/PreviousThoughts.vue'
import { useHistory } from './composables/useHistory'
import { getReasoningSteps } from './lib/openai'

const steps = ref([])
const isLoading = ref(false)
const archetype = ref('philosopher')
const { history, addEntry } = useHistory()
const input = ref('')

const rawHistory = computed(() => history.value)

function handleArchetypeChange(mode) {
  archetype.value = mode
}

function handleLoad(entry) {
  input.value = entry.input
  steps.value = entry.steps
}

function handleRemove(index) {
  history.value.splice(index, 1)
}

async function handleSubmit(input) {
  if (isLoading.value) return

  isLoading.value = true

  steps.value = []
  const allSteps = await getReasoningSteps(input, archetype.value)

  for (const step of allSteps) {
    await new Promise(resolve => setTimeout(resolve, 400))
    steps.value.push(step)
    await nextTick()
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })
  }

  addEntry(input, allSteps)

  isLoading.value = false
}

</script>
