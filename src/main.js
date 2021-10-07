import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import './assets/css/style.css'
import VueApexCharts from 'vue-apexcharts'

Vue.config.productionTip = false
Vue.component('apexchart', VueApexCharts)

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!localStorage.getItem('user_account_status')) {
      next({
        path: '/'
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
