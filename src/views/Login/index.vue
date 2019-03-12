<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'login',
  data () {
    return {
      account: '',
      psw: '',
      // api url 登入
      apiPath: `${process.env.VUE_APP_APIPATH}/auth/login`
    }
  },
  computed: {
    // vuex
    ...mapGetters(['tokenVal'])
  },
  components: {
    buttonType: () => import('@/components/ButtonItem')
  },
  methods: {
    // vuex
    ...mapActions(['menu_status', 'user_info', 'token_update']),
    login () {
      this.$validator.validate().then(result => {
        if (!result) {
          this.$swal({
            title: '帳密不能為空白!',
            icon: 'error'
          })
        } else {
          let url = this.apiPath
          let data = {
            account: this.account,
            password: this.psw
          }
          this.$store.commit('ISLOADING', true)
          this.axios.post(url, data).then((res) => {
            let respond = res.data.data
            if (respond.member.is_active === 1) {
              this.user_info(respond.member)
              this.token_update(`${respond.token_type} ${respond.access_token}`)
              this.$router.replace({ name: 'home' })
            } else {
              this.$swal({
                title: '帳密已被關閉!',
                icon: 'error'
              })
            }
          }).catch((error) => {
            // handle error
            if (error.response.data.code === 401) {
              this.$swal({
                title: error.response.data.message,
                icon: 'error'
              })
            }
          }).then(() => {
            this.$store.commit('ISLOADING', false)
          })
        }
      })
    }
  },
  mounted () {
    if (this.tokenVal) {
      this.$router.replace({ name: 'home' })
    }
  }
}
</script>

<template src="./template.html"></template>
<style lang="scss" src="./style.scss" scoped></style>
