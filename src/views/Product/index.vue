<script>
import { mapGetters } from 'vuex'
export default {
  name: 'product',
  data () {
    return {
      showImg: false,
      productImg: null,
      imgList: [],
      productTitle: null,
      productOriginPrice: null,
      productPrice: null,
      productStock: 0,
      productStockUnit: null, // 單位
      // api path
      apiPath: `${process.env.VUE_APP_APIPATH}`,
      // 相關商品
      relateProductList: [],
      // vue-carousel
      vueCarouselAuto: false,
      vueAutoplayTimeout: 1000,
      vueCarouselPerPage: 4,
      vueCarouselDotActiveColor: 'rgb(69, 199, 182)',
      vueCarouselNextLabel: '<i class="material-icons">keyboard_arrow_right</i>',
      vueCarouselPrevLabel: '<i class="material-icons">keyboard_arrow_left</i>',
      // loading
      loadingOpacity: 0.8,
      fullNone: false,
      productShowLoading: true,
      relateProductShowLoading: true,
      // countItem
      countNum: 1
    }
  },
  computed: {
    // vuex
    ...mapGetters(['tokenVal']),
    productID () {
      return this.$route.params.id
    }
  },
  components: {
    imgLazyLoading: () => import('@/components/ImgLazyLoad'),
    productItem: () => import('@/components/ProductItem'),
    buttonType: () => import('@/components/ButtonItem'),
    countItem: () => import('@/components/CountItem')
  },
  methods: {
    goHome () {
      this.$router.push({ name: 'home' })
    },
    async imgActive (img) {
      // 初始
      this.productImg = null
      this.showImg = false
      // 新的IMG
      await this.imgChange(img)
      // 重啟
      this.showImg = true
    },
    imgChange (img) {
      return new Promise((resolve, reject) => {
        this.productImg = img
        resolve(true)
      })
    },
    getProduct () {
      // 初始
      this.productShowLoading = true
      this.showImg = false
      // api
      let url = `${this.apiPath}/merchandise/${this.productID}`
      return new Promise((resolve, reject) => {
        this.axios.get(url).then((res) => {
          this.productTitle = res.data.data.name_tw
          this.productStock = res.data.data.stock
          this.productOriginPrice = res.data.data.list_price
          this.productPrice = res.data.data.price
          this.countNum = res.data.data.stock === 0 ? res.data.data.stock : 1
          this.productStockUnit = res.data.data.unit
          // 商品圖片
          this.productImg = '/img/product-1.png'
          this.imgList = [
            {
              url: '/img/product-1.png'
            },
            {
              url: '/img/product-2.png'
            },
            {
              url: '/img/product-3.png'
            },
            {
              url: '/img/product-4.png'
            },
            {
              url: '/img/product-5.png'
            }
          ]
          this.showImg = true
          this.productShowLoading = false
          console.log(res.data.data)
          console.log('商品資訊')
          resolve(true)
        })
      })
    },
    // 相關商品
    getActProductList () {
      // 初始
      this.relateProductShowLoading = true
      // api
      let url = `${this.apiPath}/merchandise`
      return new Promise((resolve, reject) => {
        this.axios.get(url).then((res) => {
          this.relateProductList = res.data.data
          this.relateProductShowLoading = false
          console.log('相關商品')
          resolve(true)
        })
      })
    },
    goCart () {
      alert('前往購物車')
    },
    goJointCart () {
      alert('前往連採')
    },
    // countNum module
    countNumChange (num) {
      this.countNum = num
    }
  },
  async mounted () {
    await this.getProduct()
    await this.getActProductList()
  },
  watch: {
    async productID (val, old) {
      await this.getProduct()
      await this.getActProductList()
    }
  }
}
</script>

<template src="./template.html"></template>
<style lang="scss" src="./style.scss" scoped></style>
