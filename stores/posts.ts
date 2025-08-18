import { defineStore } from 'pinia'
import { supabase } from '../lib/supabase'

export const usePostsStore = defineStore('posts', {
  state: () => ({ posts: [] }),
  actions: {
    async fetchPosts() {
      const { data } = await supabase.from('posts').select('*')
      this.posts = data || []
    }
  }
})
