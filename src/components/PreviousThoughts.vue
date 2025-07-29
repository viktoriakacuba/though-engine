<template>
  <div class="mt-8">
    <h2 class="text-lg font-semibold mb-2" v-if="history.length">Previous Thoughts:</h2>
    <ul class="space-y-2 max-h-64 overflow-y-auto pr-1">
      <li
        v-for="(entry, index) in props.history"
        :key="index"
        class="bg-gray-100 dark:bg-gray-800 p-3 rounded transition hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer"
      >
        <div class="flex justify-between items-center">
          <div class="text-sm font-medium truncate w-4/5" @click="load(entry)">
            {{ entry.input }}
          </div>
          <div class="flex gap-2">
            <button @click="load(entry)" title="Re-run">🔁</button>
            <button @click="remove(index)" title="Delete">🗑️</button>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
const props = defineProps({
  history: {
    type: Array,
    required: true,
  },
})

const emit = defineEmits(['load', 'remove'])

function load(entry) {
  emit('load', entry)
}
function remove(index) {
  emit('remove', index)
}
</script>