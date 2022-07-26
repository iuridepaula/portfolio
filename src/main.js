import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueAnalytics from 'vue-analytics'

// no tips
Vue.config.productionTip = false

// Analytics
Vue.use(VueAnalytics, {
  id: 'UA-75833214-1',
  router,
})

// globals
Vue.prototype.$viewport = {
  width: window.innerWidth,
  height: window.innerHeight,
  isMobile: window.innerWidth <= 768,
  isTablet: window.innerWidth <= 1024,
  isDesktop: window.innerWidth > 1024,
}
function setViewport() {
  Vue.prototype.$viewport = {
    width: window.innerWidth,
    height: window.innerHeight,
    isMobile: window.innerWidth <= 568,
    isTablet: window.innerWidth <= 1024,
    isDesktop: window.innerWidth > 1024,
  }
}
window.addEventListener('resize', setViewport)

// instance
new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app')
