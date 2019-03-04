<script>
export default {
  name: 'memPsw',
  components: {
    buttonType: () => import('@/components/ButtonItem')
  },
  methods: {
    save () {
      console.log('儲存密碼')
    }
  }
}
</script>

<template src="./template.html"></template>
<style lang="scss" src="./style.scss" scoped></style>
