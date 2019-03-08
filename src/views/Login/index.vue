<script>
export default {
  name: 'login',
  components: {
    buttonType: () => import('@/components/ButtonItem')
  },
  methods: {
    login () {
      console.log('登入')
    }
  }
}
</script>

<template src="./template.html"></template>
<style lang="scss" src="./style.scss" scoped></style>
