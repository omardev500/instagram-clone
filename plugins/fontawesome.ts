import { library, config } from '@fortawesome/fontawesome-svg-core'
import { faHeart, faComment, faBookmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// Prevent CSS auto-insertion (Nuxt handles CSS)
config.autoAddCss = false

// Add icons to library
library.add(faHeart, faComment, faBookmark)

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon)
})
