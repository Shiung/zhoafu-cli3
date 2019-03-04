<script>
export default {
  name: 'cart',
  data () {
    return {
      cartList: [],
      invoice: '',
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
      ]
    }
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
  }
}
</script>

<template src="./template.html"></template>
<style lang="scss" src="./style.scss" scoped></style>
