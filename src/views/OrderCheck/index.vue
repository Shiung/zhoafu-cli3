<script>
export default {
  name: 'orderCheck',
  components: {
    buttonType: () => import('@/components/ButtonItem')
  },
  methods: {
    shopping () {
      console.log('繼續購物')
    }
  }
}
</script>

<template src="./template.html"></template>
<style lang="scss" src="./style.scss" scoped></style>
