<script setup>
  import { useStoriesStore } from "~/stores/stories"
  
  const storiesStore = useStoriesStore()
  onMounted(async () => {
    await storiesStore.fetchStories()
  })
</script>

<template>
  <div v-if="storiesStore.loading">Loading...</div>
  
  <div class="w-full p-3 bg-red-300">
    <div>
      
    </div>
  </div>
</template>

<style scoped>

</style>
