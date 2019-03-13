<script>
import { mapGetters } from 'vuex'
export default {
  name: 'cart',
  data () {
    return {
      // cartList: [],
      // 測試資料 ----------------
      cartList: [
        {
          'id': 1,
          'idModel': 'BA20190131006330',
          'title': '【諾鈣C】維他命C+鈣 發泡錠 20錠(柳橙口味+檸檬口味)',
          'oPrice': 950,
          'price': 850,
          'url': '/img/product-1.png',
          'vendor': '兆福藥局',
          'stock': 5
        },
        {
          'id': 2,
          'idModel': 'BA20190131006331',
          'title': '曼秀雷敦水份潤唇膏-無香料 3.5g',
          'oPrice': 450,
          'price': 150,
          'url': '/img/product-2.png',
          'vendor': '兆福藥局',
          'stock': 2
        }
      ],
      // 測試資料 ---------------- end
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
    // this.getCartList()
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
