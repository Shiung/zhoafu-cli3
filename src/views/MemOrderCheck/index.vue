<script>
import $ from 'jquery'
export default {
  name: 'memOrderCheck',
  mounted () {
    // 偵測 bs4 nav-pills 開關
    $('a[data-toggle="pill"]').on('shown.bs.tab', function (e) {
      // console.log(e.target) // newly activated tab
      // console.log(e.relatedTarget) // previous active tab
      // console.log($(e.target).attr('aria-controls'))
    })
  }
}
</script>

<template src="./template.html"></template>
<style lang="scss" src="./style.scss" scoped></style>
