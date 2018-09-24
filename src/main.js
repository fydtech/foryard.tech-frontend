import Vue from 'vue'
import VueScrollTo from 'vue-scrollto'
import './registerServiceWorker'
import App from './App.vue'

Vue.use(VueScrollTo)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
