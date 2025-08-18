<script setup>
  import { supabase } from "../lib/supabase"
  
  useSeoMeta({
    title: 'Instagram Clone | Home Page',
    description: 'Home Page in Nuxt.js & Supabase Instagram Clone',
  });
  
</script>

<template>
  <Navbar />
  <Stories />
</template>

<style scoped>

</style>
