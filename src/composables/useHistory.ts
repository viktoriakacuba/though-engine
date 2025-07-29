import { ref, watch } from 'vue'

const history = ref<{ input: string; steps: string[]; timestamp: number }[]>([])

export function useHistory() {
  const stored = localStorage.getItem('thought-history')
  if (stored) history.value = JSON.parse(stored)

  watch(history, () => {
    localStorage.setItem('thought-history', JSON.stringify(history.value))
  }, { deep: true })

  function addEntry(input: string, steps: string[]) {
    history.value.unshift({ input, steps, timestamp: Date.now() })
    if (history.value.length > 10) history.value.pop()
  }

  return { history, addEntry }
}
