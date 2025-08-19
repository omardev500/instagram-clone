<script setup>
  import { useStoriesStore } from "~/stores/stories"
  import { Swiper, SwiperSlide } from 'swiper/vue'
  import { FreeMode, Mousewheel } from 'swiper/modules'
  import 'swiper/css'
  import 'swiper/css/free-mode'
  import storyImage from '~/assets/images/story.jpg'

  const storiesStore = useStoriesStore()
  onMounted(async () => {
    await storiesStore.fetchStories()
  })
</script>

<template>
  <div v-if="storiesStore.loading">Loading...</div>
  
  <div class="w-screen px-5 stories-swiper mt-1 h-30">
    <Swiper
      :slides-per-view="4.25"  <!-- Partial preview of next story -->
      :space-between="48"
      :free-mode="true"       <!-- Finger-scrollable -->
      :mousewheel="true"      <!-- Optional: mouse support -->
      class="stories-swiper"
    >
      <SwiperSlide v-for="story in storiesStore.stories" class="swiper-slide max-w-28 h-full" :key="story.id">
        <div class="w-18 ml-2 h-18 bg-gradient-to-bl from-[#dc3fd1] via-[#fd4966] to-[#fdd12a] p-[3px] inline-block rounded-full">
          <div class="p-[2px] bg-white rounded-full">
            <img :src="storyImage" alt="Story image url" class="w-full h-full object-cover object-center rounded-full" />
          </div>
        </div>
        <span class="story-user-name w-full h-full text-md text-center inline-flex justify-center pb-1 pl-1 font-(family-name:--font-2)">{{ story.author }}</span>
      </SwiperSlide>
    </Swiper>
    
  </div>
</template>

<style scoped>
  
  .stories-swiper {
    padding: 14px 0 8px 0; 
    /* Hide scrollbar */
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* IE/Edge */
  }
  .stories-swiper::-webkit-scrollbar { display: none; }


</style>
