import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Rainbow from './index'

Vue.config.productionTip = false

Vue.use(Rainbow)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

