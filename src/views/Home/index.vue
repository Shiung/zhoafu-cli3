<script>
import { mapGetters } from 'vuex'
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
    ...mapGetters(['menuStatus'])
  },
  components: {
    navBar: () => import('@/components/Navbar'),
    footerBox: () => import('@/components/Footerbox')
  },
  methods: {
    gotop () {
      $('html, body').animate({
        'scrollTop': 0 }, 'slow')
    },
    handleScroll () {
      // console.log('有滑動')
      // console.log(window.scrollY)
      // console.log(window.innerHeight)
      this.optionSwitch = window.scrollY > 0
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  }
}
</script>

<template src="./template.html"></template>
<style lang="scss" src="./style.scss" scoped></style>
