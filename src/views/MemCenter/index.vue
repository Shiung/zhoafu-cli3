<script>
import { mapGetters } from 'vuex'
import $ from 'jquery'
export default {
  name: 'memCenter',
  computed: {
    // vuex
    ...mapGetters(['tokenVal', 'menuStatus'])
  },
  methods: {
    rwdscrollMenu () {
      // // 1. js-------------------------------------------
      let el = this.$el.querySelector('#rwdScrollUse')
      this.$nextTick(() => {
        // 必須等頁面加載玩(否則會抓到前一個元素)
        let target = el.querySelector('#rwdScrollUse .router-link-exact-active')
        if (!target) return false
        let offsetNum =
          target.offsetLeft -
          el.offsetLeft -
          el.offsetWidth / 2 +
          target.offsetWidth / 2
        $('#rwdScrollUse').animate({
          'scrollLeft': offsetNum }, 'slow')
      })

      // 2. jquery-----------------------------------
      // let el = $('#rwdScrollUse')
      // this.$nextTick(() => {
      //   let target = $('#rwdScrollUse .router-link-exact-active')
      //   if (target.length === 0) return false
      //   let offsetNum =
      //     target.offset().left -
      //     el.offset().left -
      //     el.width() / 2 +
      //     target.width() / 2
      //   $('#rwdScrollUse').animate({
      //     'scrollLeft': offsetNum }, 500)
      // })
    }
  },
  mounted () {
    if (!this.tokenVal) {
      this.$swal({
        title: '請登入帳號',
        icon: 'warning'
      })
      this.$router.replace({ name: 'home' })
    }
    // rwd
    this.rwdscrollMenu()
  },
  watch: {
    tokenVal (val) {
      if (!val) {
        this.$router.replace({ name: 'home' })
      }
    },
    '$route' (to, from) {
      this.rwdscrollMenu()
    }
  }
}
</script>

<template src="./template.html"></template>
<style lang="scss" src="./style.scss" scoped></style>
