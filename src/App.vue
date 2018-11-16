<template>
  <div>
    <common-header></common-header>
    <div class="container">
      <router-view/>
    </div>
    <common-footer></common-footer>
  </div>
</template>

<script>
import CommonHeader from './components/common-header'
import CommonFooter from './components/common-footer'
export default {
  components: { CommonFooter, CommonHeader },
  created() {
    this.$store.dispatch('blogPosts')
  }
}
</script>
