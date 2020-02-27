import Vue from 'vue'
import vuetify from './plugins/vuetify'
import './plugins/axios'
import './plugins/firebase'
import './plugins/vue-toasted'
import './error'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
