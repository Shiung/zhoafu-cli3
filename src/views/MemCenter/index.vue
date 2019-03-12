<script>
import { mapGetters } from 'vuex'
export default {
  name: 'memCenter',
  computed: {
    // vuex
    ...mapGetters(['tokenVal'])
  },
  mounted () {
    if (!this.tokenVal) {
      this.$swal({
        title: '請登入帳號',
        icon: 'warning'
      })
      this.$router.replace({ name: 'home' })
    }
  },
  watch: {
    tokenVal (val) {
      if (!val) {
        this.$router.replace({ name: 'home' })
      }
    }
  }
}
</script>

<template src="./template.html"></template>
<style lang="scss" src="./style.scss" scoped></style>
