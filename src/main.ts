import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'

import { createHead } from '@vueuse/head'

import { setupLayouts } from 'virtual:generated-layouts'
import App from './App.vue'
import generatedRoutes from '~pages'

import '@unocss/reset/tailwind.css'
import './styles/main.css'
import 'uno.css'

const routes = setupLayouts(generatedRoutes)
const head = createHead()
const pinia = createPinia()
const i18n = createI18n({
  locale: 'en',
})

const app = createApp(App)
const router = createRouter({
  routes,
  history: createWebHistory(),
})

app.use(router)
app.use(head)
app.use(pinia)
app.use(i18n)

app.mount('#app')

// // https://github.com/antfu/vite-ssg
// export const createApp = Vite(
//   App,
//   { routes, base:  },
//   (ctx) => {
//     // install all modules under `modules/`
//     Object.values(import.meta.globEager('./modules/*.ts')).forEach(i => i.install?.(ctx))
//   },
// )

// createApp(App).use()
