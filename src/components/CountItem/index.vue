<script>
export default {
  name: 'countItem',
  props: {
    count: {
      type: Number,
      default: 1
    },
    max: {
      type: Number,
      // required: true,
      default: 10
    },
    min: {
      type: Number,
      default: 1
    }
  },
  data () {
    return {
      dataInput: this.count
    }
  },
  methods: {
    addCount () {
      if (this.count >= this.max) {
        this.$swal({
          title: `超過庫存數量${this.max}`,
          icon: 'error'
        })
        return
      }
      let num = Number(this.count) + 1
      this.emitData(num)
    },
    minusCount () {
      if (this.count <= this.min) {
        this.$swal({
          title: '數量至少大於1',
          icon: 'error'
        })
        return
      }
      let num = Number(this.count) - 1
      this.emitData(num)
      // this.countNum--
    },
    emitData (num) {
      this.$emit('changeData', num)
      console.log('請求API')
    }
  },
  watch: {
    count () {
      // console.log('props 有變化')
      this.dataInput = this.count
    },
    dataInput (val) {
      if (this.count === val) {
        // console.log('pros改變')
      } else {
        // console.log('input輸入改變', val)
        let input = Number(val)
        let max = this.max
        let min = this.min
        if (input <= max && input >= min && Number.isInteger(input)) {
          this.emitData(input)
        } else if (input === 0) { // 沒輸入值或是輸入 1-2 或是輸入 0
          // console.log('沒輸入數值')
          this.dataInput = this.count
        } else {
          // console.log('數值超出範圍')
          this.dataInput = this.count
          this.$swal({
            title: `數量需小於${max}`,
            icon: 'error'
          })
        }
      }
    }
  }
}
</script>

<template src="./template.html"></template>
<style lang="scss" src="./style.scss" scoped></style>
