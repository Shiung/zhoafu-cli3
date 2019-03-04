<script>
export default {
  name: 'indexPage',
  data () {
    return {
      // loading
      productShowLoading: true,
      actShowLoading: true,
      vendorShowLoading: true,
      adShowLoading: true,
      loadingOpacity: 0.8,
      fullNone: false,
      // 商品分類專區 類別
      productCateCurrent: 'product-cate-1',
      productList: [],
      // 最新消息
      newslist: [],
      // 活動專區
      actList: [],
      actImg: null,
      // 熱門供應商
      hotVendor: [],
      // 廣告
      advertisement: []
    }
  },
  computed: {
    productCateURL () {
      let cateCurrent = this.productCateCurrent
      let url = ''
      switch (cateCurrent) {
        case 'product-cate-1':
          url = 'productContin'
          break
        case 'product-cate-2':
          url = 'productRec'
          break
        default:
          url = 'productContin'
          break
      }
      return url
    }
  },
  components: {
    bannerItme: () => import('@/components/BannerItem'),
    productItem: () => import('@/components/ProductItem'),
    imgLazyLoading: () => import('@/components/ImgLazyLoad')
  },
  methods: {
    getProductList () {
      let urlCate = this.productCateURL
      this.axios.get(`http://localhost:5000/${urlCate}`).then((res) => {
        this.productList = res.data
        this.productShowLoading = false
      })
    },
    cateProductSearch (cate) {
      // 變更標籤位置
      this.productCateCurrent = `product-cate-${cate}`
      // 變更商品內容
      this.productList = []
      this.productShowLoading = true
      this.getProductList()
    },
    getNesList () {
      this.axios.get(`http://localhost:5000/news`).then((res) => {
        this.newslist = res.data
      })
    },
    getActProductList () {
      this.axios.get(`http://localhost:5000/productAct`).then((res) => {
        this.actList = res.data[0].data
        this.actImg = res.data[0].actImg
        this.actShowLoading = false
      })
    },
    getHotVendor () {
      this.axios.get(`http://localhost:5000/vendor`).then((res) => {
        this.hotVendor = res.data
        this.vendorShowLoading = false
      })
    },
    getAdvertisement () {
      this.axios.get(`http://localhost:5000/Advertisement`).then((res) => {
        this.advertisement = res.data
        this.adShowLoading = false
      })
    }
  },
  mounted () {
    this.getProductList()
    this.getNesList()
    this.getActProductList()
    this.getHotVendor()
    this.getAdvertisement()
  }
}
</script>

<template src="./template.html"></template>
<style lang="scss" src="./style.scss" scoped></style>
