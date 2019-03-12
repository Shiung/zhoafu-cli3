import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true, // 嚴格模式 建議在開發時檢查是否依照正常vuex 流程使用(耗效能)
  state: {
    menuSwitch: false,
    isLoading: false, // 會員狀態確認
    // token
    token: '',
    cookieKey: 'zhoafu_token',
    user: {}
  },
  mutations: {
    MENUSWITCH (state, payload) {
      state.menuSwitch = payload
    },
    ISLOADING (state, payload) {
      state.isLoading = payload
    },
    // token
    TOKENNEW (state, payload) {
      state.token = payload
    },
    // user info
    USERINFOUPDATE (state, payload) {
      state.user = payload
    }
  },
  actions: {
    menu_status (context, params) {
      context.commit('MENUSWITCH', params)
    },
    loading_status (context, params) {
      context.commit('ISLOADING', params)
    },
    // token
    token_update (context, newtoken) {
      let token = newtoken
      context.commit('TOKENNEW', token)
      context.dispatch('set_cookie')
      console.log('更新token in vuex')
    },
    set_cookie (context) {
      let key = context.state.cookieKey
      let token = context.state.token
      localStorage.setItem(key, token)
      console.log('更新token in localStorage')
    },
    // logout
    log_out (context) {
      let token = ''
      let obj = {}
      context.commit('TOKENNEW', token)
      context.commit('USERINFOUPDATE', obj)
      context.dispatch('remove_cookie')
    },
    remove_cookie (context) {
      let key = context.state.cookieKey
      localStorage.removeItem(key)
    },
    // user info
    user_info (context, obj) {
      context.commit('USERINFOUPDATE', obj)
    }
  },
  getters: {
    menuStatus: state => state.menuSwitch,
    isLoading: state => state.isLoading,
    tokenVal: state => state.token,
    cookieKeyVal: state => state.cookieKey,
    userInfo: state => state.user
  },
  modules: {
  }
})
