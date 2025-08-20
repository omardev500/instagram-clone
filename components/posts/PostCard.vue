<script setup>
  let isCaptionCollapsed = ref(false);
  
  const props = defineProps({
    authorPicSrc: String,
    authorName: String,
    userId: String,
    caption: String,
    attachments: {
      type: Array,
      default: [],
      required: false
    },
    videoSrc: {
      type: String,
      default: "",
      required: false
    },
    imgSrc: {
      type: String,
      default: "",
      required: false
    },
    likes: { 
      type: Number, 
      default: 0,
      required: false
    },
    comments: { 
      type: Number, 
      default: 0,
      required: false
    },
    hashtags: {
      type: Array,
      default: [],
      required: false
    },
    isCurrentUserLike: {
      type: Boolean,
      default: false,
      required: false
    },
    isCurrentUserComment: {
      type: Boolean,
      default: false,
      required: false
    },
    isCurrentUserShare: {
      type: Boolean,
      default: false,
      required: false
    },
    isCurrentUserSave: {
      type: Boolean,
      default: false,
      required: false
    }
  })
  
  const getVideoExt = (str) => {
    const ext = str.match(/\.(mp4|webm|ogg|mov|avi|wmv|flv|mkv|3gp)(?:[\?#]|$)/i)?.[1]?.toLowerCase();
    if (!ext) return undefined;
    const mimeMap = { mp4: 'mp4', webm: 'webm', ogg: 'ogg', mov: 'quicktime', flv: 'x-flv' };
    return `video/${mimeMap[ext] || ext}`;
  };
  
</script>
<template>
  <li>
    <div class="pt-4 pb-3 px-3 flex justify-between items-center">
      <div class="flex gap-2 items-center">
        <img :src="authorPicSrc" alt="Author picture image" class="object-center object-cover w-11 rounded-full" />
        <p class="text-md font-bold">{{ authorName }}</p>
      </div>
      <font-awesome-icon icon="fa-solid fa-ellipsis" class="w-6 text-gray-500" />
    </div>
    <div>
      <div v-if="imgSrc" class="h-[53vh]"> <!-- Images / Videos Container -->
        <img v-if="imgSrc" class="w-full h-full object-center object-cover" :src="imgSrc" />
      </div>
      <div v-if="videoSrc" class="h-[53vh]">
        <video controls class="w-full h-full">
          <source :src="videoSrc" :type="getVideoExt(videoSrc)">
          Sorry it seems that your browser doesn't support this video type.
        </video>
      </div>
    </div>
    <div class="px-3 pb-4">
      <!-- Reacts (like, commnet, share, save)-->
      <div class="flex pt-4 justify-between items-center">
        <div class="flex gap-4">
          <button class="cursor-pointer">
            <font-awesome-icon icon="fa-regular fa-heart" class="w-6 text-gray-700" />
          </button>
          <button class="cursor-pointer">
            <font-awesome-icon icon="fa-regular fa-comment" class="w-6 text-gray-700" />
          </button>
          <button class="cursor-pointer">
            <font-awesome-icon icon="fa-regular fa-paper-plane" class="w-6 text-gray-700" />
          </button>
        </div>
        <button class="cursor-pointer">
          <font-awesome-icon icon="fa-regular fa-bookmark" class="w-4 text-gray-700" />
        </button>
      </div>
      
      <!-- Num of Likes (bold) \n Caption \n View all $num comments -->
      
      <p class="font-[500] pt-3 pb-2 text-lg">{{ likes }} likes</p>
      
      <span v-if="caption.length > 88 && !isCaptionCollapsed">{{ caption.substring(0, 88) }}</span>
        
      <span v-if="caption.length < 88 || isCaptionCollapsed">{{ caption }}</span>
      
      <button v-if="caption.length > 88 && !isCaptionCollapsed" class="px-1 text-slate-600 cursor-pointer" @click="isCaptionCollapsed = true">...more</button>
      <button v-if="caption.length > 88 && isCaptionCollapsed" class="px-1 text-slate-600 cursor-pointer" @click="isCaptionCollapsed = false">...less</button>
      
      <button class="block pt-2 text-gray-500 cursor-pointer">View all {{ comments }} comments</button>
      
    </div>
  </li>
</template>
<style scoped>
  
</style>
