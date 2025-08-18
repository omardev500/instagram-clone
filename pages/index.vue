<script setup>
  import { supabase } from "../lib/supabase"
  
  useSeoMeta({
    title: 'Instagram Clone | Home Page',
    description: 'Home Page in Nuxt.js & Supabase Instagram Clone',
  });
  
  
  const postsStore = usePostsStore()
  await postsStore.fetchPosts() // Auto fetches posts!
  
</script>

<template>
  <h1 class="text-2xl font-bold p-4 font-(family-name:--font-1)">Instagram</h1>
  
  <div v-for="post in postsStore.posts" :key="post.id">
    <img :src="post.image_url" width="200" alt="post image" />
    <p class="font-(family-name:--font-2)">{{ post.caption }}</p>
    <div class="flex gap-2">
      <font-awesome-icon :icon="['fas', 'heart']" class="text-red-800 w-7" />
      <font-awesome-icon :icon="['fas', 'comment']" class="w-7" />
    </div>
  </div>
</template>

<style scoped>

</style>
