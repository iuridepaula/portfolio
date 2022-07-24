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

// service worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/iuri.is-sw.js')
  })
}

// instance
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
