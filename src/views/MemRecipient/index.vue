<script>
export default {
  name: 'memRecipient',
  data () {
    return {
      // vue-select
      citySelected: null,
      cityOptions: [
        { id: 1, label: '台北市' },
        { id: 2, label: '新北市' }
      ],
      townSelected: null,
      townOptions: [
        { id: 1, label: '內湖區' },
        { id: 2, label: '大安區' }
      ]
    }
  },
  components: {
    buttonType: () => import('@/components/ButtonItem')
  },
  methods: {
    save () {
      console.log('儲存')
    },
    refresh () {
      console.log('重整資料')
    }
  }
}
</script>

<template src="./template.html"></template>
<style lang="scss" src="./style.scss" scoped></style>
