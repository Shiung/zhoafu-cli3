<script>
import { mapActions, mapGetters } from 'vuex'
import $ from 'jquery'
export default {
  name: 'home',
  data () {
    return {
      optionSwitch: false
    }
  },
  computed: {
    // vuex
    ...mapGetters(['menuStatus', 'cookieKeyVal', 'tokenVal'])
  },
  components: {
    navBar: () => import('@/components/Navbar'),
    footerBox: () => import('@/components/Footerbox')
  },
  methods: {
    // vuex
    ...mapActions(['token_update', 'remove_cookie', 'user_info', 'loading_status']),
    gotop () {
      $('html, body').animate({
        'scrollTop': 0 }, 'slow')
    },
    handleScroll () {
      // console.log('有滑動')
      // console.log(window.scrollY)
      // console.log(window.innerHeight)
      this.optionSwitch = window.scrollY > 0
    },
    getlocalStorageStatus () {
      let key = this.cookieKeyVal
      return localStorage[key] ? localStorage[key] : null
    },
    // router path
    routerCheck () {
      if (this.$route.name === 'login') {
        this.$router.replace({ name: 'home' })
      }
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
    // token check
    if (!this.tokenVal) {
      // storage token check 確認帳號
      let storageToken = this.getlocalStorageStatus()
      if (storageToken) {
        this.loading_status(true) // 頁面loading
        // 取得會員資料
        let url = `${process.env.VUE_APP_APIPATH}/me`
        this.axios.get(url, {
          headers: {
            'Authorization': `${storageToken}`
          }
        }).then((res) => {
          // 已經登入
          this.user_info(res.data.data)
          if (res.headers.authorization) {
            // token變更
            this.token_update(res.headers.authorization)
          } else {
            // 儲存storage token 到vuex
            this.$store.commit('TOKENNEW', storageToken)
          }
          this.routerCheck()
        }).catch((error) => {
          if (error.response.data.code === 500) {
            // token 異常
            this.remove_cookie()
            this.$swal({
              title: error.response.data.message,
              icon: 'error'
            })
          } else console.log(error.response)
        }).then(() => {
          this.loading_status(false) // 頁面loading
        })
      } // else console.log('沒有存在storage')
      // console.log('沒有存在vuex token')
      // 沒有登入
    } else {
      // console.log('有存在vuex token')
      // 已經登入
    }
  }
}
</script>

<template src="./template.html"></template>
<style lang="scss" src="./style.scss" scoped></style>
