<script>
import { mapGetters } from 'vuex'
export default {
  name: 'cart',
  data () {
    return {
      cartList: [],
      invoice: '',
      pointUse: false,
      // vue select
      paySelected: null,
      payOptions: [
        { id: 1, label: '信用卡' },
        { id: 2, label: 'ATM' }
      ],
      donateSelected: null,
      donateOptions: [
        { id: 1, label: '單位一' },
        { id: 2, label: '單位二' }
      ],
      addreeSelected: null,
      addreeOptions: [
        // { id: 1, user: 'peter 0933929102', store: '丁丁藥局(台北)', address: '台北市衡陽路135號7樓' },
        // { id: 2, user: 'peter 0933929102', store: '丁丁藥局(台中)', address: '台中市台灣大道二段' },
        // { id: 2, user: 'peter 0933929102', store: '丁丁藥局(高雄)', address: '高雄市小港區' }
        { id: 1, label: 'peter 0933929102 , 丁丁藥局(台北) , 台北市衡陽路135號7樓' },
        { id: 2, label: 'peter 0933929102 , 丁丁藥局(台中) , 台中市台灣大道二段' },
        { id: 2, label: 'peter 0933929102 , 丁丁藥局(高雄) , 高雄市小港區' }
      ]
    }
  },
  computed: {
    // vuex
    ...mapGetters(['tokenVal'])
  },
  components: {
    imgLazyLoading: () => import('@/components/ImgLazyLoad'),
    countItem: () => import('@/components/CountItem'),
    cartListBox: () => import('@/components/CartListBox'),
    buttonType: () => import('@/components/ButtonItem')
  },
  methods: {
    getCartList () {
      this.axios.get(`http://localhost:5000/cartList`).then((res) => {
        this.cartList = res.data
      })
    },
    shopping () {
      this.$swal({
        title: `繼續購物`,
        icon: 'success'
      })
    },
    goPay () {
      this.$swal({
        title: `結帳`,
        icon: 'success'
      })
    }
  },
  mounted () {
    this.getCartList()
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
