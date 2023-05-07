import { createApp } from 'vue'
import registerPlugins from '@/plugins'
import App from './App.vue'
const app = createApp(App)
import '@/assets/styles/main.scss'

registerPlugins(app)

app.mount('#app')
