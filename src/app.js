import Vue from 'vue'
import App from './App.vue'
import {createRouter} from './router'
import store from './store/index'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

const router = createRouter()
const app = new Vue({
  router,
  store,
  render: h => h(App)
})

router.onReady(() => {
  app.$mount('#app')
})