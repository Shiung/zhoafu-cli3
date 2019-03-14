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
import { MdField, MdRipple, MdButton, MdRadio, MdMenu, MdList, MdDialog, MdSwitch, MdSpeedDial } from 'vue-material/dist/components'
// vue-dattime
import Datetime from 'vue-datetime'
// vee 驗證
import VeeValidate from 'vee-validate'
import zhTwValidate from 'vee-validate/dist/locale/zh_TW'
// filters
import currencyFilter from './filters/currency'
// 置頂function

Vue.config.productionTip = false

Vue.use(VueAxios, axios)
axios.defaults.headers.common['Accept'] = 'application/json'

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
Vue.use(MdSpeedDial)

// vue datetime
Vue.use(Datetime)

// vee use
Vue.use(VeeValidate)
VeeValidate.Validator.localize('zh_TW', zhTwValidate) // 轉為中文字

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
  // 跳頁關閉rwd 開關
  store.dispatch('menu_status', false)
})

// 跳轉頁面後返回頂部
router.afterEach((to, from, next) => {
  window.scrollTo(0, 0)
})
