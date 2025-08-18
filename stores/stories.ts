import { defineStore } from 'pinia'
import { supabase } from '~/lib/supabase'

export const useStoriesStore = defineStore('stories', {
  state: () => ({
    stories: [],
    loading: false
  }),
  actions: {
    // Fetch data from Supabase
    async fetchStories() {
      this.loading = true
      const { data, error } = await supabase
        .from("stories")
        .select("*")
      if (error) console.error("Error fetching from Stories: ", error)
      else this.stories = data || {}
      
      this.loading = false
    }
  }
})
