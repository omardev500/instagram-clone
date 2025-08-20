<script setup>
  import { supabase } from "../lib/supabase"
  import storyImage from '~/assets/images/story.jpg'
  import postImage from '~/assets/images/postImage.jpg'
  import postImage2 from '~/assets/images/randImage.jpeg'
  
  useSeoMeta({
    title: 'Instagram Clone | Home Page',
    description: 'Home Page in Nuxt.js & Supabase Instagram Clone',
  });
  
</script>

<template>
  
  <Navbar />
  <div class="pb-15"></div>
  <main>
    <Stories />
    <hr class="border-1 border-gray-100" />
    <ul>
      <PostCard :author-pic-src="storyImage" 
                author-name="Omar Hossam" 
                caption="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enimad minim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat ❤️🌐" 
                :img-src="postImage"
      />
      <hr class="border-1 border-gray-100" />
      <PostCard :author-pic-src="storyImage" 
                author-name="Omar Hossam" 
                caption="Lorem ipsum dolor sit amet, consectetur ❤️" 
                :img-src="postImage2"
      />
    </ul>
  </main>
  <Footer />
</template>

<style scoped>

</style>
