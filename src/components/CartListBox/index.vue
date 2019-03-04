<script>
export default {
  name: 'cartListBox',
  props: {
    productID: {
      type: Number,
      required: true,
      default: 1
    },
    productCusID: {
      type: String,
      required: true,
      default: '產品客戶標號'
    },
    productName: {
      type: String,
      default: '產品客戶名稱'
    },
    vendor: {
      type: String,
      default: '兆福藥局'
    },
    originPrice: {
      type: Number,
      // required: true,
      default: 1000
    },
    price: {
      type: Number,
      // required: true,
      default: 900
    },
    stock: {
      type: Number,
      default: 1
    },
    img: {
      type: String,
      default: '/static/img/product-2.png'
    }
  },
  data () {
    return {
      // 測試
      countNum: 9 // this.stock
    }
  },
  computed: {
    totalPrice () {
      return this.stock * this.price
    }
  },
  components: {
    imgLazyLoading: () => import('@/components/ImgLazyLoad'),
    countItem: () => import('@/components/CountItem')
  },
  methods: {
    countNumChange (num) {
      // console.log('變動')
      // // 測試
      // this.countNum = num
    },
    deleteCart () {
      alert(this.productID)
    }
  }
}
</script>

<template src="./template.html"></template>
<style lang="scss" src="./style.scss" scoped></style>
