<script>
export default {
  name: 'productCate',
  data () {
    return {
      // loading
      relateShowLoading: false,
      fullNone: false,
      loadingOpacity: 0.8,
      // 分類資訊
      cate: '維他命劑',
      // 測試資料---------------
      // 產品資訊
      data: [
        {
          'id': 1,
          'name': '三多L-麩醯胺酸鋅',
          'oPrice': 110,
          'price': 99,
          'url': '/img/product-1.png'
        },
        {
          'id': 2,
          'name': '曼秀雷敦全家潤唇膏',
          'oPrice': 110,
          'price': 99,
          'url': '/img/product-1.png'
        },
        {
          'id': 3,
          'name': 'LRP深層淨膚泥面膜',
          'oPrice': 1100,
          'price': 999,
          'url': '/img/product-1.png'
        },
        {
          'id': 4,
          'name': '萊萃美超級B群加C錠',
          'oPrice': 3100,
          'price': 2500,
          'url': '/img/product-1.png'
        },
        {
          'id': 5,
          'name': '萊萃美超級B群加C錠',
          'oPrice': 3100,
          'price': 2500,
          'url': '/img/product-1.png'
        },
        {
          'id': 6,
          'name': '三多L-麩醯胺酸鋅',
          'oPrice': 110,
          'price': 99,
          'url': '/img/product-1.png'
        },
        {
          'id': 7,
          'name': '曼秀雷敦全家潤唇膏',
          'oPrice': 110,
          'price': 99,
          'url': '/img/product-1.png'
        },
        {
          'id': 8,
          'name': 'LRP深層淨膚泥面膜',
          'oPrice': 1100,
          'price': 999,
          'url': '/img/product-1.png'
        },
        {
          'id': 9,
          'name': '萊萃美超級B群加C錠',
          'oPrice': 3100,
          'price': 2500,
          'url': '/img/product-1.png'
        },
        {
          'id': 10,
          'name': '萊萃美超級B群加C錠',
          'oPrice': 3100,
          'price': 2500,
          'url': '/img/product-1.png'
        }
      ],
      // 分頁資訊
      currentPage: 1,
      totalPages: 3,
      perPage: 15,
      count: 15,
      totalCount: 100
      // 測試資料---------------
    }
  },
  computed: {
    cateID () {
      return this.$route.params.id
    }
  },
  components: {
    productItem: () => import('@/components/ProductItem'),
    paginationItem: () => import('@/components/PaginationItem')
  },
  methods: {
    goHome () {
      this.$router.push({ name: 'home' })
    },
    filterType (type) {
      console.log(type)
    }
  }
}
</script>

<template src="./template.html"></template>
<style lang="scss" src="./style.scss" scoped></style>
