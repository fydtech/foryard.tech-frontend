import Vue from 'vue'
import VueScrollTo from 'vue-scrollto'
import './registerServiceWorker'
import App from './App.vue'
import router from './router'

Vue.use(VueScrollTo)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
