import { library, config } from '@fortawesome/fontawesome-svg-core'
import { faHeart as fasHeart, faComment, faBookmark, faPlus } from '@fortawesome/free-solid-svg-icons'
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons'
import { faFacebookMessenger } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// Prevent CSS auto-insertion (Nuxt handles CSS)
config.autoAddCss = false

// Add icons to library
library.add(fasHeart, farHeart, faComment, faBookmark, faPlus, faFacebookMessenger)

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon)
})
