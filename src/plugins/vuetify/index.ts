import { createVuetify } from 'vuetify'
import { aliases, fa } from 'vuetify/iconsets/fa'
import * as directives from 'vuetify/directives'
import '@fortawesome/fontawesome-free/css/all.css'

const vueTify = createVuetify({
  directives,
  theme: {
    themes: {
      light: {
        colors: {
          primary: '#1867C0',
          secondary: '#5CBBF6'
        }
      }
    }
  },
  icons: {
    defaultSet: 'fa',
    aliases,
    sets: {
      fa,
    }
  }
})

export default vueTify
