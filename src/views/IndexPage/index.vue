<script>
import { mapGetters } from 'vuex'
export default {
  name: 'indexPage',
  data () {
    return {
      // loading
      jointproductShowLoading: true,
      recommendproductShowLoading: true,
      fastproductShowLoading: true,
      hotSaleproductShowLoading: true,
      actShowLoading: true,
      vendorShowLoading: true,
      adShowLoading: true,
      loadingOpacity: 0.8,
      fullNone: false,
      // api path
      apiPath: `${process.env.VUE_APP_APIPATH}`,
      // vue-carousel
      vueCarouselAuto: false,
      vueAutoplayTimeout: 1000,
      vueCarouselDotActiveColor: 'rgb(69, 199, 182)', // 客戶綠
      vueCarouselNextLabel: '<i class="material-icons">keyboard_arrow_right</i>',
      vueCarouselPrevLabel: '<i class="material-icons">keyboard_arrow_left</i>',
      // banner 清單
      bannerList: [],
      // 商品清單
      jointProductsList: [],
      recommendProductsList: [],
      recommendBanner: null,
      fastProductsList: [],
      fastBanner: null,
      hotSaleProductsList: [],
      // 活動專區
      actListAPI: [],
      actImg: null,
      // 熱門供應商
      hotVendor: [],
      // 廣告
      advertisement: []
    }
  },
  computed: {
    // vuex
    ...mapGetters(['tokenVal'])
  },
  components: {
    bannerItme: () => import('@/components/BannerItem'),
    productItem: () => import('@/components/ProductItem'),
    imgLazyLoading: () => import('@/components/ImgLazyLoad')
  },
  methods: {
    getbannerList () {
      return new Promise((resolve, reject) => {
        this.bannerList = [
          {
            id: 1,
            url: 'https://fakeimg.pl/1200x400/cccccc/ffffff/?text=w1200 3:1'
          },
          {
            id: 2,
            url: 'https://fakeimg.pl/1200x400/cccccc/ffffff/?text=w1200 3:1'
          },
          {
            id: 3,
            url: 'https://fakeimg.pl/1200x400/cccccc/ffffff/?text=w1200 3:1'
          }
        ]
        console.log('順序1 banner')
        resolve(true)
      })
    },
    // 連採類別商品清單
    getJointProductList () {
      let url = `${this.apiPath}/merchandise`
      let params = {
        limit: 5
      }
      return new Promise((resolve, reject) => {
        this.axios.get(url, {
          params
        }).then((res) => {
          this.jointProductsList = res.data.data
          this.jointproductShowLoading = false
          console.log('連採商品')
          resolve(true)
        })
      })
    },
    // 推薦類別商品清單
    getRecommendProductList () {
      let url = `${this.apiPath}/merchandise`
      let params = {
        limit: 3
      }
      return new Promise((resolve, reject) => {
        this.axios.get(url, {
          params
        }).then((res) => {
          this.recommendProductsList = res.data.data
          this.recommendBanner = 'https://fakeimg.pl/500x250/cccccc/ffffff/?text=w500 2:1'
          this.recommendproductShowLoading = false
          console.log('推薦商品')
          resolve(true)
        })
      })
    },
    // 秒殺商品
    getFastProductList () {
      let url = `${this.apiPath}/merchandise`
      let params = {
        limit: 3
      }
      return new Promise((resolve, reject) => {
        this.axios.get(url, {
          params
        }).then((res) => {
          this.fastProductsList = res.data.data
          this.fastBanner = 'https://fakeimg.pl/500x250/cccccc/ffffff/?text=w500 2:1'
          this.fastproductShowLoading = false
          console.log('秒殺商品')
          resolve(true)
        })
      })
    },
    // 熱銷商品
    getHotSaleProductList () {
      let url = `${this.apiPath}/merchandise`
      let params = {
        limit: 5
      }
      return new Promise((resolve, reject) => {
        this.axios.get(url, {
          params
        }).then((res) => {
          this.hotSaleProductsList = res.data.data
          this.hotSaleproductShowLoading = false
          console.log('熱銷商品')
          resolve(true)
        })
      })
    },
    // 活動專區
    getActProductList () {
      let url = `${this.apiPath}/merchandise`
      let params = {
        limit: 8
      }
      return new Promise((resolve, reject) => {
        this.axios.get(url, {
          params
        }).then((res) => {
          this.actListAPI = res.data.data
          this.actImg = 'https://fakeimg.pl/500x300/cccccc/ffffff/?text=w500 5:3'
          this.actShowLoading = false
          console.log('最後')
          resolve(true)
        })
      })
    },
    // 熱門供應商
    getHotVendor () {
      return new Promise((resolve, reject) => {
        this.hotVendor = [
          {
            'img': 'https://fakeimg.pl/200x100/cccccc/ffffff/?text=w200 2:1'
          },
          {
            'img': 'https://fakeimg.pl/200x100/cccccc/ffffff/?text=w200 2:1'
          },
          {
            'img': 'https://fakeimg.pl/200x100/cccccc/ffffff/?text=w200 2:1'
          },
          {
            'img': 'https://fakeimg.pl/200x100/cccccc/ffffff/?text=w200 2:1'
          }
        ]
        this.vendorShowLoading = false
        console.log('vendor 圖片')
        resolve(true)
      })
    },
    // 廣告版
    getAdvertisement () {
      return new Promise((resolve, reject) => {
        this.advertisement = [
          {
            'img': 'https://fakeimg.pl/400x100/cccccc/ffffff/?text=w400 4:1'
          },
          {
            'img': 'https://fakeimg.pl/400x100/cccccc/ffffff/?text=w400 4:1'
          }
        ]
        this.adShowLoading = false
        console.log('廣告 圖片')
        resolve(true)
      })
    }
  },
  async mounted () {
    await this.getbannerList()
    await this.getJointProductList()
    await this.getRecommendProductList()
    await this.getFastProductList()
    await this.getHotSaleProductList()
    await this.getHotVendor()
    await this.getAdvertisement()
    await this.getActProductList()
  }
}
</script>

<template src="./template.html"></template>
<style lang="scss" src="./style.scss" scoped></style>
