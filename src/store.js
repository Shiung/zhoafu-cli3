import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true, // 嚴格模式 建議在開發時檢查是否依照正常vuex 流程使用(耗效能)
  state: {
    menuSwitch: false,
    isLoading: false // 會員狀態確認
  },
  mutations: {
    MENUSWITCH (state, payload) {
      state.menuSwitch = payload
    },
    ISLOADING (state, payload) {
      state.isLoading = payload
    }
  },
  actions: {
    menu_status (context, params) {
      context.commit('MENUSWITCH', params)
    }
  },
  getters: {
    menuStatus: state => state.menuSwitch,
    isLoading: state => state.isLoading
  },
  modules: {
  }
})
