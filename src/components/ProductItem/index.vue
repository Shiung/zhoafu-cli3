<script>
export default {
  name: 'productItem',
  props: {
    productID: {
      type: String,
      // required: true,
      default: null
    },
    productName: {
      type: String,
      default: '產品名稱'
    },
    originPrice: {
      type: Number,
      // required: true,
      default: null
    },
    price: {
      type: Number,
      required: true,
      default: null
    },
    img: {
      type: String,
      default: null
    }
  },
  methods: {
    goPage () {
      this.$router.push({ name: 'product', params: { id: this.productID } })
    }
  },
  components: {
    imgLazyLoading: () => import('@/components/ImgLazyLoad')
  }
}
</script>

<template src="./template.html"></template>
<style lang="scss" src="./style.scss" scoped></style>
