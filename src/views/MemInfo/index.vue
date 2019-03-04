<script>
export default {
  name: 'memInfo',
  data () {
    return {
      multiShop: false,
      approvement: false,
      approvedDate: '',
      joinDate: '',
      invoiceSelected: null,
      invoiceOptions: [
        { id: 1, label: '發票一' },
        { id: 2, label: '發票二' }
      ]
    }
  },
  components: {
    buttonType: () => import('@/components/ButtonItem')
  },
  methods: {
    save () {
      console.log('儲存')
    }
  }
}
</script>

<template src="./template.html"></template>
<style lang="scss" src="./style.scss" scoped></style>
