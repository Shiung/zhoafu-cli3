<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'navbar',
  data () {
    return {
      showMenuBoxSwitch: false, // 第一層導覽頁開啟
      showMenuBoxActive: null, // 第一層導覽頁 active id
      showMenuBox2Active: null, // 第二層導覽頁 active id
      showMenuBoxSecondSwitch: false, // 第二層導覽頁開啟
      showMenuBoxThirdSwitch: false, // 第三層導覽頁開啟
      productSecondMenuLoading: true,
      productSecondMenuLoadingOpacity: 0.8,
      // 商品分類
      productCateList: [],
      productCateListFirst: [],
      productCateListSecond: [],
      productCateListThird: [],
      // nav 廣告 list
      navAdList: [],
      // loading
      menuListShowLoading: true,
      menuListSecondShowLoading: true,
      menuListThirdShowLoading: true,
      loadingOpacity: 0.8,
      loadingOpacityZero: 0,
      fullNone: false,
      // rwd
      rwdMenuStatus: false,
      rwdMenuStep: 0,
      // rwdMenuGuide: '功能選單', // 當下顯示
      rwdMenuGuide_history_0: '分類選單', // 記錄
      rwdMenuGuide_history_1: '', // 記錄
      rwdMenuGuide_history_2: '', // 記錄
      rwdMenuGuide_history_3: '' // 記錄
    }
  },
  computed: {
    rwdMenuGuide () {
      switch (this.rwdMenuStep) {
        case 0:
          return this.rwdMenuGuide_history_0
        case 1:
          return this.rwdMenuGuide_history_1
        case 2:
          return this.rwdMenuGuide_history_2
        case 3:
          return this.rwdMenuGuide_history_3
        default:
          return this.rwdMenuGuide_history_0
      }
    },
    // vuex
    ...mapGetters(['menuStatus'])
  },
  components: {
    imgLazyLoading: () => import('@/components/ImgLazyLoad')
  },
  methods: {
    // vuex
    ...mapActions(['menu_status']),
    goHome () {
      this.$router.push({ name: 'home' })
    },
    showMenu () {
      this.menuListShowLoading = true
      this.showMenuBoxSwitch = !this.showMenuBoxSwitch
      this.getMenuList()
    },
    showMenuSecond (id) {
      this.showMenuBoxActive = id
      this.showMenuBoxSecondSwitch = true
      this.menuListSecondShowLoading = true
      this.getMenuSecondList(id)
      // 關閉第三層選單
      this.showMenuBoxThirdSwitch = false
    },
    showMenuThird (id) {
      this.showMenuBox2Active = id
      this.showMenuBoxThirdSwitch = true
      this.menuListThirdShowLoading = true
      this.productCateListThird = []
      this.navAdList = []
      this.getMenuThirdList(id)
      this.getNavAdList()
    },
    getMenuList () {
      this.axios.get('http://localhost:5000/nav').then((res) => {
        this.productCateListFirst = res.data
        this.menuListShowLoading = false
      })
    },
    getMenuSecondList (id) {
      this.axios.get(`http://localhost:5000/nav/${id}`).then((res) => {
        this.productCateListSecond = res.data.child
        this.menuListSecondShowLoading = false
      })
    },
    getMenuThirdList (id) {
      this.axios.get(`http://localhost:5000/nav_level3_${id}`).then((res) => {
        this.productCateListThird = res.data
        this.menuListThirdShowLoading = false
      })
    },
    getNavAdList () {
      this.axios.get(`http://localhost:5000/nav-ad`).then((res) => {
        this.navAdList = res.data
      })
    },
    // rwd
    rwdHandler (step, iduse, name) {
      this.rwdMenuStep = step
      this.rwdMenuGuide_step = name
      // 儲存歷史
      switch (step) {
        case 1: // 第一層
          this.menuListShowLoading = true
          this.rwdMenuGuide_history_1 = name
          this.getMenuList()
          break
        case 2:
          this.menuListSecondShowLoading = true
          this.rwdMenuGuide_history_2 = name
          this.getMenuSecondList(iduse)
          break
        case 3:
          this.menuListThirdShowLoading = true
          this.rwdMenuGuide_history_3 = name
          this.getMenuThirdList(iduse)
          break
        default:
          break
      }
    },
    rwdMenuBack () {
      this.rwdMenuStep -= 1
    },
    // 選單前往商品分類頁
    goCatePage (idselected) {
      // 關閉導覽列選單 桌機
      this.showMenuBoxSwitch = false
      // 關閉導覽列選單 手機
      this.menu_status(false)
      // 轉址
      this.$router.push({ name: 'productCate', params: { id: idselected } })
    }
  },
  mounted () {
    this.axios.get('http://localhost:5000/nav').then((res) => {
      this.productCateList = res.data
    })
  },
  watch: {
    showMenuBoxSwitch (val) {
      if (!val) {
        this.productCateListFirst = []
        this.productCateListSecond = []
        this.productCateListThird = []
        this.showMenuBoxActive = null
        this.showMenuBox2Active = null
        this.showMenuBoxSecondSwitch = false
        this.showMenuBoxThirdSwitch = false
      }
    }
  }
}
</script>

<template src="./template.html"></template>
<style lang="scss" src="./style.scss" scoped></style>
