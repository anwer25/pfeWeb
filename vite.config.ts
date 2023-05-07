import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import ViewUiResolver from 'unplugin-vue-components/vite'
import vuetify from 'vite-plugin-vuetify'
import {
  AntDesignVueResolver,
  ElementPlusResolver,
  VantResolver,
  ViewUiResolver,
  Vuetify3Resolver
} from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      dts: true,
      types: [
        {
          from: 'vue-router',
          names: ['RouterLink', 'RouterView']
        }
      ],
      resolvers: [Vuetify3Resolver()]
    }),

    ViewUiResolver({ dts: true }),
    vuetify({ autoImport: true })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
