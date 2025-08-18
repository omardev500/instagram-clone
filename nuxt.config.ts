import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  modules: ['@pinia/nuxt', '@nuxtjs/google-fonts'],
  css: ["~/assets/css/main.css"],
  devtools: { enabled: true },
  vite: {
    plugins: [
      tailwindcss(), // adding tailwind css plugin
    ]
  },
  googleFonts: {
    families: {
      'Inter': [400, 700],
      'Dancing Script': [400]
    }
  },
  app: {
    head: {
      title: "Instagram Clone", // Default title
      meta: [
        { charset: "UTF-8" },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'A beautiful instagram clone built using Nuxt.js and Supabase' },
        { name: 'keywords', content: 'instagram, clone, nuxt, supabase' }
      ]
    }
  },
  components: {
    dirs: [
      '~/components/layout',
      '~/components/posts',
      '~/components/ui'
    ]
  }
})
