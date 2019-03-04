<script>
export default {
  name: 'product',
  data () {
    return {
      showImg: false,
      productImg: null,
      imgList: [],
      productTitle: null,
      // 相關商品
      relateProductList: [],
      // vue-carousel
      vueCarouselAuto: false,
      vueAutoplayTimeout: 1000,
      vueCarouselPerPage: 4,
      vueCarouselDotActiveColor: 'rgba(36, 94, 96,1)',
      // loading
      loadingOpacity: 0.8,
      fullNone: false,
      relateProductShowLoading: true,
      // countItem
      countNum: 1
    }
  },
  computed: {
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
        // 新的IMG
        setTimeout(() => {
          this.productImg = img
          resolve(true)
        }, 0)
      })
    },
    getProduct () {
      this.axios.get(`http://localhost:5000/productItem`).then((res) => {
        this.productImg = res.data.imgs[0].url
        this.imgList = res.data.imgs
        this.productTitle = res.data.title
        this.showImg = true
      })
    },
    getActProductList () {
      this.axios.get(`http://localhost:5000/productAct`).then((res) => {
        this.relateProductList = res.data[0].data
        this.relateProductShowLoading = false
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
  mounted () {
    this.getProduct()
    this.getActProductList()
  },
  watch: {
    productID (val, old) {
      this.getProduct()
      this.getActProductList()
    }
  }
}
</script>

<template src="./template.html"></template>
<style lang="scss" src="./style.scss" scoped></style>
