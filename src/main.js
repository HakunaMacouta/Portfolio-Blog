import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueDisqus from 'vue-disqus'
import Meta from 'vue-meta'

import 'normalize.css'
import '@/scss/all.scss'

Vue.use(VueDisqus)
Vue.use(Meta)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
  mounted() {
    document.dispatchEvent(new Event('app.rendered'))
  }
}).$mount('#app')
