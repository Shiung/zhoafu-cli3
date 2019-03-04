<script>
export default {
  name: 'buttonItem',
  props: {
    btnStr: {
      type: String,
      default: '按鈕'
    }
  },
  methods: {
    nextStep () {
      this.$emit('stepGo')
    }
  }
}
</script>

<template src="./template.html"></template>
<style lang="scss" src="./style.scss" scoped></style>
