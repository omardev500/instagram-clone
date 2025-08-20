import { library, config } from '@fortawesome/fontawesome-svg-core'
import { faHeart as fasHeart, faComment as fasComment, faBookmark as fasBookmark, faPlus, faEllipsis, faHouse as fasHouse, faMagnifyingGlass as fasMagnifyingGlass, faUser as fasUser } from '@fortawesome/free-solid-svg-icons'

// faMagnifyingGlass as fasMagnifyingGlass, faClapperboard as fasClapperboard , 
// faMagnifyingGlass as farMagnifyingGlass, faClapperboard as farClapperboard, faBagShopping as farBagShopping , 
import { faHeart as farHeart, faComment as farComment, faBookmark as farBookmark, faPaperPlane, faHouse as farHouse, faUser as farUser} from '@fortawesome/free-regular-svg-icons'
import { faFacebookMessenger } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// Prevent CSS auto-insertion (Nuxt handles CSS)
config.autoAddCss = false

// Add icons to library
library.add(
  fasHeart, farHeart,
  fasComment, farComment,
  fasBookmark, farBookmark,
  faPlus,
  faEllipsis,
  faPaperPlane,
  fasHouse, farHouse,
  fasUser, farUser,
  fasMagnifyingGlass,
  faFacebookMessenger,
)

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon)
})
