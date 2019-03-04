import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'bootstrap'
import axios from 'axios'
import VueAxios from 'vue-axios'
// loading
import Loading from 'vue-loading-overlay'
// vue image loading
import VueLazyload from 'vue-lazyload'
// vue-slick
import Slick from 'vue-slick'
// vue-carousel
import VueCarousel from 'vue-carousel'
// vue-swal
import VueSwal from 'vue-swal'
// vue select
import vSelect from 'vue-select'
// vue-material
import { MdField, MdRipple, MdButton, MdRadio, MdMenu, MdList, MdDialog, MdSwitch } from 'vue-material/dist/components'
// vue-dattime
import Datetime from 'vue-datetime'
// filters
import currencyFilter from './filters/currency'
// 置頂function
import initTop from './assets/js/initTop.js' // 初始置頂

Vue.config.productionTip = false

Vue.use(VueAxios, axios)
// vue image loading
Vue.use(VueLazyload, {
  lazyComponent: true,
  attempt: 1
})
// vue-carousel
Vue.use(VueCarousel)
// sweetAlert
Vue.use(VueSwal)
// vue material
Vue.use(MdField)
Vue.use(MdRipple)
Vue.use(MdButton)
Vue.use(MdRadio)
Vue.use(MdMenu)
Vue.use(MdList)
Vue.use(MdDialog)
Vue.use(MdSwitch)

// vue datetime
Vue.use(Datetime)

// loading
Vue.component('loading', Loading) // 全域使用
// vue-slick
Vue.component('Slick', Slick) // 全域使用
// vue select
Vue.component('v-select', vSelect)
// filters
Vue.filter('currency', currencyFilter) // 全域使用

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

// 導航守衛 ==> 要在router 變動下才會觸發
router.beforeEach((to, from, next) => {
  next()
  // 置頂function
  initTop()
})
