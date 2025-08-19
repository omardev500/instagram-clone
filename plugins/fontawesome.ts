import { library, config } from '@fortawesome/fontawesome-svg-core'
import { faHeart as fasHeart, faComment as fasComment, faBookmark as fasBookmark, faPlus, faEllipsis } from '@fortawesome/free-solid-svg-icons'
import { faHeart as farHeart, faComment as farComment, faBookmark as farBookmark, faPaperPlane} from '@fortawesome/free-regular-svg-icons'
import { faFacebookMessenger } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// Prevent CSS auto-insertion (Nuxt handles CSS)
config.autoAddCss = false

// Add icons to library
library.add(fasHeart, farHeart, fasComment, farComment, fasBookmark, farBookmark, faPlus, faFacebookMessenger, faEllipsis, faPaperPlane)

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon)
})
