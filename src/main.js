import { createApp } from 'vue'
import VueGtag from 'vue-gtag'
import App from './App.vue'
import router from './router'

const app = createApp(App)

// globals
function getViewport() {
  return {
    width: window.innerWidth,
    height: window.innerHeight,
    isMobile: window.innerWidth <= 568,
    isTablet: window.innerWidth <= 1024,
    isDesktop: window.innerWidth > 1024,
  }
}

app.config.globalProperties.$viewport = getViewport()
window.addEventListener('resize', () => {
  app.config.globalProperties.$viewport = getViewport()
})

app.use(router)

// Analytics
app.use(
  VueGtag,
  {
    config: { id: 'UA-75833214-1' },
  },
  router
)

app.mount('#app')
