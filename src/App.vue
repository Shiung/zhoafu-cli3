<template>
  <div id="app">
    <loading
      :active.sync="isLoading"
      color="rgba(36, 94, 96,1)"
      :opacity= "loadingOpacity"
      loader="dots"
      style="z-index:1500;"
    >
    </loading>
    <router-view/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'App',
  data () {
    return {
      // isLoading: true,
      loadingOpacity: 0.6
    }
  },
  computed: {
    ...mapGetters(['isLoading'])
  }
}
</script>

<style lang="scss" src="./assets/scss/all.scss"></style>
