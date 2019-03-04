<script>
export default {
  name: 'bannerItem',
  props: {
    // slick customer
    autoplayStatus: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      // slick
      slickOptions: {
        lazyLoad: 'ondemand',
        slidesToShow: 1,
        slidesToScroll: 1,
        focusOnSelect: true,
        autoplay: true,
        autoplaySpeed: 5000,
        dots: true,
        prevArrow: '<button type="button" class="slick-prev"><i class="material-icons">chevron_left</i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="material-icons">chevron_right</i></button>'
      },
      data: []
    }
  },
  methods: {
    // slick
    next () {
      this.$refs.slick.next()
    },
    prev () {
      this.$refs.slick.prev()
    },
    reInit () {
      // Helpful if you have to deal with v-for to update dynamic lists
      this.$nextTick(() => {
        this.$refs.slick.reSlick()
      })
    },
    // Events listeners
    handleAfterChange (event, slick, currentSlide) {
      // console.log('handleAfterChange', event, slick, currentSlide)
    },
    handleBeforeChange (event, slick, currentSlide, nextSlide) {
      // console.log('handleBeforeChange', event, slick, currentSlide, nextSlide)
    },
    handleBreakpoint (event, slick, breakpoint) {
      // console.log('handleBreakpoint', event, slick, breakpoint)
    },
    handleDestroy (event, slick) {
      // console.log('handleDestroy', event, slick)
    },
    handleEdge (event, slick, direction) {
      // console.log('handleEdge', event, slick, direction)
    },
    handleInit (event, slick) {
      // console.log('handleInit', event, slick)
    },
    handleReInit (event, slick) {
      // console.log('handleReInit', event, slick)
    },
    handleSetPosition (event, slick) {
      // console.log('handleSetPosition', event, slick)
    },
    handleSwipe (event, slick, direction) {
      // console.log('handleSwipe', event, slick, direction)
    },
    handleLazyLoaded (event, slick, image, imageSource) {
      // console.log('handleLazyLoaded', event, slick, image, imageSource)
    },
    handleLazeLoadError (event, slick, image, imageSource) {
      // console.log('handleLazeLoadError', event, slick, image, imageSource)
    },
    // get data
    getData () {
      return new Promise((resolve, reject) => {
        this.axios.get('http://localhost:5000/banner').then((res) => {
          setTimeout(() => {
            this.data = res.data
            resolve(res.data)
            console.log('有唷')
          }, 0)
        }).catch((error) => {
          console.log(error)
          resolve(false)
        })
        // resolve(true)
      })
    }
  },
  beforeUpdate () {
    if (this.$refs.slick) {
      this.$refs.slick.destroy()
    }
  },
  beforeDestroy () {
    // remove event
    // clear timer
    // gc
  },
  async mounted () {
    await this.getData()
    this.slickOptions.autoplay = this.autoplayStatus
    // this.reInit()
    this.$refs.slick.create()
  }
}
</script>

<template src="./template.html"></template>
<style lang="scss" src="./style.scss" scoped></style>
