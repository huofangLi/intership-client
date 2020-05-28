import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Router from 'vue-router'
import store from './store'
import './plugins/element.js'
import axios from 'axios'

Vue.config.productionTip = false
Vue.prototype.$http = axios
Vue.prototype.$serverPath = 'http://localhost:8080'

Vue.use(Router)
const VueRouterPush = Router.prototype.push
Router.prototype.push = function push (to) {
  return VueRouterPush.call(this, to).catch(err => err)
}

axios.interceptors.request.use(
  (config) => {
    // console.log("axios interceptors request", config, store.state.token);
    // if (store.state.token) {
    //   config.headers.Authorization = 'Bearer ' + store.state.token
    // }
    if (localStorage.getItem('token')) {
      config.headers.Authorization = 'Bearer ' + localStorage.getItem('token')
    }
    return config
  },
  () => {
  }
)

axios.interceptors.response.use(
  (config) => {
    console.log('axios interecptors response', config)
    return config
  },
  (err) => {
    console.log('axios interecptors response err', err)
    // eslint-disable-next-line eqeqeq
    if (err.response.status == 401) {
      router.push('/login')
    }
  }
)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
