import { createVuetify } from 'vuetify'
import { aliases, fa } from 'vuetify/iconsets/fa'
import { mdi } from 'vuetify/iconsets/mdi'


const vueTify = createVuetify({
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
            mdi
        }
    }
})


export default vueTify